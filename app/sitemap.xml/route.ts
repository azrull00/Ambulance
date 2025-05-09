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
  const xmlContent = generateSitemapXml()
  
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  })
} 