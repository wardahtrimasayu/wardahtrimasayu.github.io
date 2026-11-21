import { expect, it } from 'vitest';
import { asset, route, alternate } from './urls';

it.each([
  ['/', 'id', '/', '/'],
  ['/toolkit/', 'id', '/docs', '/toolkit/docs'],
  ['/toolkit/', 'en', '/integrations/editor', '/toolkit/en/integrations/editor'],
  ['/toolkit/', 'en', '/docs#install', '/toolkit/en/docs#install'],
] as const)('composes %s %s %s', (base, locale, path, result) => expect(route(path, locale, base)).toBe(result));

it('switches locale without duplicating the base', () => {
  expect(alternate('/toolkit/en/docs/', 'id', '/toolkit/')).toBe('/toolkit/docs');
  expect(alternate('/toolkit/docs', 'en', '/toolkit/')).toBe('/toolkit/en/docs');
});

it('resolves assets from the base without a locale prefix', () => {
  expect(asset('/favicon.svg', '/')).toBe('/favicon.svg');
  expect(asset('/images/example.svg', '/toolkit/')).toBe('/toolkit/images/example.svg');
});
