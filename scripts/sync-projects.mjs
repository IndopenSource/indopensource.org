import { mkdir, writeFile } from 'node:fs/promises';

const AWESOME_REPOS_URL =
  'https://raw.githubusercontent.com/IndopenSource/awesome-indonesia/main/repos.json';
const OUT_FILE = new URL('../src/data/projects.json', import.meta.url);

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed ${response.status} for ${url}`);
  }

  return response.json();
}

function parseRepo(fullName) {
  const [owner, name] = fullName.split('/');
  return { owner, name };
}

function fallbackProject(fullName) {
  const { owner, name } = parseRepo(fullName);
  return {
    fullName,
    name,
    owner,
    description: 'Proyek dari daftar awesome-indonesia.',
    url: `https://github.com/${fullName}`,
    homepage: '',
    language: '',
    stars: 0,
    forks: 0,
    topics: [],
    archived: false
  };
}

async function getRepo(fullName) {
  try {
    const repo = await requestJson(`https://api.github.com/repos/${fullName}`);
    return {
      fullName: repo.full_name,
      name: repo.name,
      owner: repo.owner?.login,
      description: repo.description || 'Proyek dari daftar awesome-indonesia.',
      url: repo.html_url,
      homepage: repo.homepage || '',
      language: repo.language || '',
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      topics: repo.topics || [],
      archived: Boolean(repo.archived)
    };
  } catch (error) {
    console.warn(`Using fallback for ${fullName}: ${error.message}`);
    return fallbackProject(fullName);
  }
}

const repoNames = await requestJson(AWESOME_REPOS_URL);
const projects = [];

for (const fullName of repoNames) {
  projects.push(await getRepo(fullName));
}

projects.sort((a, b) => b.stars - a.stars || a.fullName.localeCompare(b.fullName));

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(OUT_FILE, `${JSON.stringify(projects, null, 2)}\n`);

console.log(`Synced ${projects.length} projects to ${OUT_FILE.pathname}`);
