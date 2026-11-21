import { z } from 'zod';

const webUrl = z
  .string()
  .url()
  .refine(value => ['https:', 'http:'].includes(new URL(value).protocol));

export function resolveSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return 'https://example.com';
  return webUrl.parse(trimmed);
}
const action = z.object({
  label: z.string().min(1),
  href: z.union([z.literal('repository'), z.string().regex(/^\/(?!\/)[a-z0-9/-]*(?:#[a-z0-9-]+)?$/), webUrl]),
});
const ctas = z.object({
  header: action,
  hero: z.object({ primary: action, secondary: action }),
  box: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    body: z.string().min(1),
    primary: action,
    secondary: action,
  }),
});
const schema = z.object({
  name: z.string().min(1),
  terminalLabel: z.string().min(1),
  url: webUrl,
  repository: webUrl,
  author: z.string().min(1),
  version: z.string().min(1),
  ctas: z.object({ id: ctas, en: ctas }),
  nav: z.array(z.object({ href: z.string().regex(/^\/(?!\/)[a-z0-9/-]*$/), key: z.string().min(1) })),
  hero: z.object({
    id: z.object({ title: z.string(), description: z.string() }),
    en: z.object({ title: z.string(), description: z.string() }),
  }),
  install: z.array(
    z.object({ id: z.string().regex(/^[a-z0-9-]+$/), label: z.string().min(1), command: z.string().min(1) }),
  ),
});

export const parseSite = (value: unknown) => schema.parse(value);
export const site = parseSite({
  name: 'Wardah Tri Masayu',
  terminalLabel: '~/wardahtri',
  url: 'https://wardahtrimasayu.github.io',
  repository: 'https://github.com/wardahtrimasayu/wardahtrimasayu.github.io',
  author: 'Wardah Tri Masayu',
  version: '0.0.1',
  ctas: {
    id: {
      header: { label: 'Mulai', href: '/docs' },
      hero: {
        primary: { label: 'Tentang Saya', href: '/about' },
        secondary: { label: 'Proyek Saya', href: '/integrations' },
      },
      box: {
        eyebrow: 'Portofolio',
        title: 'Halo! Selamat datang di ruang digital saya.',
        body: 'Saya Wardah Tri Masayu, mahasiswa yang antusias mempelajari pemrograman dan pengembangan web.',
        primary: { label: 'Repositori Github', href: 'https://github.com/wardahtrimasayu/wardahtrimasayu.github.io' },
        secondary: { label: 'Lihat Keahlian', href: '/docs' },
      },
    },
    en: {
      header: { label: 'Start', href: '/docs' },
      hero: {
        primary: { label: 'About Me', href: '/about' },
        secondary: { label: 'My Projects', href: '/integrations' },
      },
      box: {
        eyebrow: 'Portfolio',
        title: 'Hello! Welcome to my digital space.',
        body: 'I am Wardah Tri Masayu, a student enthusiastic about programming and web development.',
        primary: { label: 'GitHub Repository', href: 'https://github.com/wardahtrimasayu/wardahtrimasayu.github.io' },
        secondary: { label: 'View Skills', href: '/docs' },
      },
    },
  },
  nav: [
    { href: '/', key: 'nav.home' },
    { href: '/about', key: 'nav.about' },
    { href: '/integrations', key: 'nav.integrations' },
    { href: '/docs', key: 'nav.docs' },
    { href: '/contact', key: 'nav.contact' },
    { href: '/visualisasi', key: 'nav.chart' },
    { href: '/blog', key: 'nav.blog' },
    { href: '/statistik', key: 'nav.stats' },
    { href: '/kalkulator', key: 'nav.calc' },
  ],
  hero: {
    id: {
      title: 'Portofolio Wardah Tri Masayu',
      description: 'Mahasiswa Statistika yang tertarik pada analisis data dan pemrograman.',
    },
    en: {
      title: 'Wardah Tri Masayu Portfolio',
      description: 'A Statistics student interested in data analysis and programming.',
    },
  },
  install: [
    { id: 'npm', label: 'npm example', command: 'npm install example-package' },
    { id: 'pnpm', label: 'pnpm example', command: 'pnpm add example-package' },
  ],
});
