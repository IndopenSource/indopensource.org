import { mkdir, writeFile } from 'node:fs/promises';

const LEGACY_REPO = 'IndopenSource/awesome-indonesia-legacy';
const REVIVAL_REPO = 'IndopenSource/awesome-indonesia-revival';
const OUT_DIR = new URL('../src/data/', import.meta.url);
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!response.ok) {
    if (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') {
      throw new Error(`RATE_LIMITED: GitHub API rate limit exhausted for ${url}`);
    }
    throw new Error(`Request failed ${response.status} for ${url}`);
  }

  return response.json();
}

async function resolveDefaultBranch(fullName) {
  try {
    const repo = await requestJson(`https://api.github.com/repos/${fullName}`);
    return repo.default_branch || 'main';
  } catch (error) {
    console.warn(`Could not resolve default branch for ${fullName}: ${error.message}`);
    return 'main';
  }
}

async function fetchRepoList(orgRepo, branch) {
  const content = await requestJson(`https://api.github.com/repos/${orgRepo}/contents/repos.json?ref=${branch}`);
  const raw = Buffer.from(content.content, 'base64').toString('utf8');
  return JSON.parse(raw);
}

async function fetchRepoMetadata(fullName) {
  try {
    const repo = await requestJson(`https://api.github.com/repos/${fullName}`);
    return {
      fullName: repo.full_name,
      name: repo.name,
      owner: repo.owner.login,
      description: repo.description || '',
      url: repo.html_url,
      homepage: repo.homepage || '',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || null,
      topics: repo.topics || [],
      license: repo.license?.spdx_id || null,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      pushedAt: repo.pushed_at,
      archived: repo.archived,
      disabled: repo.disabled
    };
  } catch (error) {
    console.warn(`Could not fetch metadata for ${fullName}: ${error.message}`);
    return null;
  }
}

async function syncCollection(orgRepo, collectionName) {
  console.log(`\nSyncing ${collectionName} from ${orgRepo}...`);
  
  const branch = await resolveDefaultBranch(orgRepo);
  const repoNames = await fetchRepoList(orgRepo, branch);
  
  console.log(`Found ${repoNames.length} repos in ${collectionName}`);
  
  const repos = [];
  for (const repoName of repoNames) {
    const metadata = await fetchRepoMetadata(repoName);
    if (metadata) {
      repos.push(metadata);
    }
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  const outFile = new URL(`${collectionName}.json`, OUT_DIR);
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(outFile, `${JSON.stringify(repos, null, 2)}\n`);
  
  console.log(`Synced ${repos.length} repos to ${outFile.pathname}`);
  return repos.length;
}

try {
  const legacyCount = await syncCollection(LEGACY_REPO, 'legacy');
  const revivalCount = await syncCollection(REVIVAL_REPO, 'revival');
  
  console.log(`\n✅ Done! Legacy: ${legacyCount} repos, Revival: ${revivalCount} repos`);
} catch (error) {
  console.error('❌ Sync failed:', error.message);
  process.exit(1);
}
