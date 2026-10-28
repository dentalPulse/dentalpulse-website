import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://dentalpulse.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/billing/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
