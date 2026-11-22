import source from '../data/articles.json';

export type Article = {
  slug: string;
  locale: 'id' | 'en';
  title: string;
  date: string;
  isoDate: string;
  category: string;
  summary: string;
  body: string;
};

export function getArticles(locale: 'id' | 'en'): Article[] {
  return (source as Article[])
    .filter(article => article.locale === locale)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}
