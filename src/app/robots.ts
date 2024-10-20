import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bigone77.com/sitemap.xml',
    host: 'https://bigone77.com',
  };
}
