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

// Absolute URLs of the site and its localised pages, shared by the generated files
export function useSite() {
  const config = useRuntimeConfig()
  const { siteUrl, defaultLocale, locales } = config.public
  const root = `${siteUrl}${config.app.baseURL}`

  // Same scheme as the i18n strategy: default locale at the root, others under /<code>/
  const pageUrl = (code: string) => code === defaultLocale ? root : `${root}${code}/`

  return { root, defaultLocale, locales, pageUrl }
}
