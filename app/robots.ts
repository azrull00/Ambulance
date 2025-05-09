import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.ambulan24jammagelang.my.id/sitemap.xml',
    host: 'https://www.ambulan24jammagelang.my.id'
  }
} 