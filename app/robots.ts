import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.ambulan24jammagelang.my.id'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/*.html',
          '/sitemap.xml',
          '/#about',
          '/#services',
          '/#contact',
          '/#testimonials',
          '/#gallery'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/*.json$',
          '/*?*'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
} 