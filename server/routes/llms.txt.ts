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

import en from '../../i18n/locales/en.json'

// Summary for LLMs, following https://llmstxt.org/
export default defineEventHandler((event) => {
  const { root, pageUrl } = useSite()

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `# Eclipse QSOS

> ${en.meta.description}

Eclipse QSOS™ (${en.meta.fullName}) is an incubating open source project of the Eclipse Foundation (technology.qsos). ${en.hero.description}

The method artefacts (evaluation grids, criteria) are licensed under CC BY-SA 4.0 and the tooling under Apache-2.0.

## Website

- [Eclipse QSOS (English)](${pageUrl('en')}): presentation of the method, its maturity criteria and roadmap
- [Eclipse QSOS (français)](${pageUrl('fr')}): the same page in French
- [Full text of the website](${root}llms-full.txt): all the content of the English page in Markdown
- [Texte intégral du site en français](${root}fr/llms-full.txt): all the content of the French page in Markdown

## Project

- [Eclipse project page](https://projects.eclipse.org/projects/technology.qsos): governance, committers, releases
- [GitHub organisation](https://github.com/eclipse-qsos): source code of the QSOS tooling and of this website

## Optional

- [Eclipse Foundation](https://www.eclipse.org/): the foundation hosting the project
`
})
