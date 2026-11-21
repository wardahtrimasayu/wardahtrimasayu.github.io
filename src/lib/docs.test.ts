import { expect, it } from 'vitest';
import { getDocSource } from './docs';

const en = '../content/docs/en/getting-started.md';
const id = '../content/docs/id/getting-started.md';
const files = { [en]: '# English guide', [id]: '# Panduan Bahasa Indonesia' };
it('loads the exact guide, ignoring unrelated Markdown files', () => {
  expect(getDocSource({ '../content/docs/en/extra.md': 'wrong', ...files }, 'en')).toBe(files[en]);
  expect(getDocSource(files, 'id')).toBe(files[id]);
});
it.each([en, id])('fails for a missing translation: %s', missing => {
  const input = { ...files };
  delete input[missing as keyof typeof input];
  expect(() => getDocSource(input, 'en')).toThrow(missing);
});
