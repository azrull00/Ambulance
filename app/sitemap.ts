import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ambulan24jammagelang.my.id/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ]
}
