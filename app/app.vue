<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t, locales } = useI18n()
const head = useLocaleHead()
const config = useRuntimeConfig()

// Absolute URLs: social networks and search engines don't resolve relative ones
const siteRoot = `${config.public.siteUrl}${config.app.baseURL}`
const imageUrl = `${siteRoot}icon-512.png`

// schema.org description of the site and the project, for search engines
const structuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteRoot}#website`,
      url: siteRoot,
      name: 'Eclipse QSOS',
      description: t('meta.description'),
      inLanguage: locales.value.map(l => l.language),
      publisher: { '@id': `${siteRoot}#organization` }
    },
    {
      '@type': 'Organization',
      '@id': `${siteRoot}#organization`,
      name: 'Eclipse QSOS',
      alternateName: t('meta.fullName'),
      url: siteRoot,
      logo: imageUrl,
      sameAs: [
        'https://github.com/eclipse-qsos',
        'https://projects.eclipse.org/projects/technology.qsos'
      ],
      parentOrganization: {
        '@type': 'Organization',
        name: 'Eclipse Foundation',
        url: 'https://www.eclipse.org/'
      }
    }
  ]
}))

useHead(() => ({
  title: t('meta.title'),
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  link: [...(head.value.link || [])],
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Eclipse QSOS' },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: t('header.logoAlt') },
    { name: 'twitter:card', content: 'summary' },
    ...(head.value.meta || [])
  ],
  script: [
    { key: 'structured-data', type: 'application/ld+json', innerHTML: JSON.stringify(structuredData.value) }
  ]
}))
</script>
