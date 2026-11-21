import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES, htmlLang, localizePath, switchLocalePath, toLocale } from './locales';
import { ui } from './ui';

describe('locales', () => {
  it('serves Indonesian by default and English', () => {
    expect(DEFAULT_LOCALE).toBe('id');
    expect(LOCALES).toEqual(['id', 'en']);
  });

  it('falls back to the default for unknown values', () => {
    expect(toLocale('en')).toBe('en');
    expect(toLocale(undefined)).toBe('id');
    expect(toLocale('fr')).toBe('id');
  });

  it('maps locales to BCP 47 html lang values', () => {
    expect(htmlLang('en')).toBe('en');
    expect(htmlLang('id')).toBe('id');
  });
});

describe('localizePath', () => {
  it('keeps Indonesian paths unprefixed', () => {
    expect(localizePath('/ports', 'id')).toBe('/ports');
    expect(localizePath('/', 'id')).toBe('/');
  });

  it('prefixes other locales', () => {
    expect(localizePath('/ports/ghostty', 'en')).toBe('/en/ports/ghostty');
    expect(localizePath('/', 'en')).toBe('/en');
  });

  it('keeps the hash', () => {
    expect(localizePath('/docs#quickstart', 'en')).toBe('/en/docs#quickstart');
  });
});

describe('switchLocalePath', () => {
  it('moves the current page to another locale', () => {
    expect(switchLocalePath('/ports/ghostty', 'en')).toBe('/en/ports/ghostty');
    expect(switchLocalePath('/en/ports/ghostty', 'id')).toBe('/ports/ghostty');
    expect(switchLocalePath('/en', 'id')).toBe('/');
    expect(switchLocalePath('/en/', 'id')).toBe('/');
    expect(switchLocalePath('/', 'en')).toBe('/en');
  });
});

describe('ui dictionary', () => {
  it('has the same keys in every locale', () => {
    const keys = Object.keys(ui.en).sort();
    for (const locale of LOCALES) {
      expect(Object.keys(ui[locale]).sort(), locale).toEqual(keys);
    }
  });

  it('has no empty strings', () => {
    for (const locale of LOCALES) {
      for (const [key, value] of Object.entries(ui[locale])) {
        expect(value.trim(), `${locale}.${key}`).not.toBe('');
      }
    }
  });

});
