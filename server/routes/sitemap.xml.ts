/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export default defineEventHandler((event) => {
  const { defaultLocale, locales, pageUrl } = useSite()
  const lastmod = new Date().toISOString().slice(0, 10)

  // Each page lists every language version, mirroring the hreflang links in <head>
  const alternates = [
    ...locales.map(code => `    <xhtml:link rel="alternate" hreflang="${code}" href="${pageUrl(code)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(defaultLocale)}"/>`
  ].join('\n')

  const urls = locales.map(code => `  <url>
    <loc>${pageUrl(code)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`).join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
})
