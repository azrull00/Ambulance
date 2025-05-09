import { MetadataRoute } from 'next'

function generateSitemapXml(): string {
  const baseUrl = 'https://www.ambulan24jammagelang.my.id'
  const currentDate = new Date().toISOString()

  const pages = [
    {
      url: baseUrl,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/#about`,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#services`,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#contact`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/#testimonials`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/#gallery`,
      changefreq: 'weekly',
      priority: 0.7
    }
  ]

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return xmlContent
}

export async function GET() {
  return new Response(generateSitemapXml(), {
    headers: {
      'Content-Type': 'application/xml',
      'x-content-type-options': 'nosniff',
      'Cache-Control': 'public, max-age=3600'
    }
  })
} 