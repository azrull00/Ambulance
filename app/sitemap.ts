import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ambulan24jammagelang.my.id'
  const currentDate = new Date().toISOString()

  const routes = [
    '',
    '/#about',
    '/#services',
    '/#contact',
    '/#testimonials',
    '/#gallery',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 
             route === '/#contact' ? 0.9 :
             route === '/#services' || route === '/#about' ? 0.8 :
             0.7
  }))
} 