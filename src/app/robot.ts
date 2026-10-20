import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Protège d'éventuelles routes d'API ou d'administration
    },
    sitemap: 'https://mondialeservicesauto.com/sitemap.xml',
  };
}