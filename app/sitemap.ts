import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap {return ['en','es'].map(locale=>({url:`https://pacificmule.com/${locale}`,lastModified:new Date(),changeFrequency:'monthly',priority:1,alternates:{languages:{en:'https://pacificmule.com/en',es:'https://pacificmule.com/es'}}}));}
