import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const base = 'https://hari.laddu.cc';
  const now = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: base, changefreq: 'monthly' as const, priority: '1.0' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
};
