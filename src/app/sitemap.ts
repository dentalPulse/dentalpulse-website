import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dentalpulse.com';
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/platform', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/roi', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/book-demo', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/solutions/managers', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/solutions/sales-reps', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/solutions/marketing', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/integrations', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/customers', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/resources', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
