import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Add any private routes here if needed
    },
    sitemap: 'https://dentalpulse.com/sitemap.xml', // Replace with your actual domain when deploying
  };
}
