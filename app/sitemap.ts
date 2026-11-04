import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return ['en', 'es'].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages: { en: `${base}/en`, es: `${base}/es` } },
  }));
}
