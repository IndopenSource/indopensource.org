import type { ImageMetadata } from 'astro';
import aiYangProaktifOg from '../assets/og/learning/ai-yang-proaktif.jpg';
import aiUntukProgrammingOg from '../assets/og/learning/ai-untuk-programming-dan-coding-cepat.jpg';
import buatAiOg from '../assets/og/learning/buat-ai-sendiri-dengan-open-source.jpg';
import menulisJurnalOg from '../assets/og/learning/menulis-jurnal-dibantu-ai.jpg';
import roadmapAiOg from '../assets/og/learning/roadmap-ai-gotong-royong.jpg';
import smartDigitalEnergyOg from '../assets/og/learning/smart-digital-energy.jpg';

export interface LearningResource {
  slug: string;
  title: string;
  seoTitle?: string;
  year: number;
  topic: string;
  description: string;
  driveId: string;
  ogImage: ImageMetadata;
}

export const learningResources: LearningResource[] = [
  {
    slug: 'buat-ai-sendiri-dengan-open-source',
    title: 'Buat AI Sendiri dengan Open Source',
    year: 2026,
    topic: 'AI & Open Source',
    description: 'Pengantar membangun kemampuan AI secara mandiri dengan teknologi terbuka.',
    driveId: '1K7Cm_itM66Pc7QENrQAdv1C3zs6zwTJU',
    ogImage: buatAiOg
  },
  {
    slug: 'ai-untuk-programming-dan-coding-cepat',
    title: 'AI untuk Programming dan Coding Cepat',
    year: 2026,
    topic: 'Pemrograman',
    description: 'Catatan praktis memakai AI untuk mempercepat kerja pemrograman.',
    driveId: '1uHtRMjQ-sUcK6vhfUAaljpJjZw4edDCg',
    ogImage: aiUntukProgrammingOg
  },
  {
    slug: 'ai-yang-proaktif',
    title: 'AI yang Proaktif: Memahami Agentic AI dengan Contoh Sederhana',
    seoTitle: 'Agentic AI Proaktif dengan Contoh Sederhana',
    year: 2025,
    topic: 'Agentic AI',
    description: 'Pengenalan agentic AI melalui contoh yang mudah diikuti.',
    driveId: '1XyHLOwuX073coykmbv7B0R-qeOR7iM92',
    ogImage: aiYangProaktifOg
  },
  {
    slug: 'menulis-jurnal-dibantu-ai',
    title: 'Menulis Jurnal Dibantu AI: Data-First Anti-Halusinasi',
    seoTitle: 'Menulis Jurnal dengan AI Tanpa Halusinasi',
    year: 2025,
    topic: 'Literasi AI',
    description: 'Panduan menggunakan AI secara berbasis data untuk penulisan jurnal.',
    driveId: '1RkpZOjNcIcAyq4LYYKhw6kP3kJZcCtwW',
    ogImage: menulisJurnalOg
  },
  {
    slug: 'roadmap-ai-gotong-royong',
    title: 'Roadmap AI Gotong Royong bagi Bangsa Indonesia',
    seoTitle: 'Roadmap AI Gotong Royong Indonesia',
    year: 2025,
    topic: 'Transformasi Digital',
    description: 'Pandangan tentang arah pengembangan AI yang kolaboratif di Indonesia.',
    driveId: '1P30QgMJq6G3srKYbXYye2DJFciNE7D6p',
    ogImage: roadmapAiOg
  },
  {
    slug: 'smart-digital-energy',
    title: 'Smart Digital Energy: Inovasi Teknologi Open Source untuk Pencapaian Target Produksi Migas',
    seoTitle: 'Smart Digital Energy dengan Open Source',
    year: 2025,
    topic: 'Energi',
    description: 'Contoh pemanfaatan teknologi open source untuk sektor energi.',
    driveId: '1swVUuIxriekfYxl4KXL5moLonArrH0n9',
    ogImage: smartDigitalEnergyOg
  }
];

export const author = 'Onno W. Purbo';
export const authorProfileHref = '/belajar/onno-w-purbo/';
export const authorWebsite = 'https://onnocenter.or.id/';

export function drivePreviewUrl(resource: LearningResource) {
  return `https://drive.google.com/file/d/${resource.driveId}/preview`;
}

export function driveDownloadUrl(resource: LearningResource) {
  return `https://drive.usercontent.google.com/download?id=${resource.driveId}&export=download&confirm=t`;
}
