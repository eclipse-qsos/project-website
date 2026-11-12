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

import type en from '../../i18n/locales/en.json'

type Messages = typeof en

// Fills the {placeholders} of a locale string
const format = (message: string, values: Record<string, string | number>) =>
  message.replace(/\{(\w+)\}/g, (_, key) => String(values[key]))

// Full content of the landing page in Markdown, in page order (see pages/index.vue)
export function buildFullText(m: Messages, code: string) {
  const { root, locales, pageUrl } = useSite()
  const other = locales.find(c => c !== code) ?? code
  const steps = Object.values(m.method.steps)
  const criteria = Object.values(m.maturity.criteria)
  const topicCount = criteria.reduce((count, c) => count + c.topics.length, 0)

  const sections = [
    `# ${m.meta.title}

> ${m.meta.description}

${format(m.llms.source, { page: pageUrl(code), other: pageUrl(other) })}

## ${m.hero.title} ${m.hero.titleAccent}

${m.hero.description}

- CC BY-SA 4.0 ${m.hero.metadata.artifacts}, Apache-2.0 ${m.hero.metadata.tooling}, Eclipse ${m.hero.metadata.governance}
- ${format(m.llms.facts, { steps: steps.length, criteria: topicCount })}`,

    `## ${m.method.badge} — ${m.method.title}

${m.method.description}

${steps.map((s, i) => `### ${format(m.method.step, { number: i + 1 })} — ${s.title}

${s.description}`).join('\n\n')}`,

    `## ${m.maturity.title}

${criteria.map(c => `### ${c.title}

${c.description}

${c.topics.map(t => `- ${t}`).join('\n')}`).join('\n\n')}`,

    `## ${m.value.title}

${Object.values(m.value.cards).map(c => `### ${c.title}

${c.description}`).join('\n\n')}`,

    `## ${m.why.badge} — ${m.why.title}

${m.why.description}`,

    `## ${m.roadmap.title}

${Object.values(m.roadmap.phases).map(p => `### ${p.title}

${p.description}`).join('\n\n')}`,

    `## ${m.cta.title}

${m.cta.description}

- [${m.cta.buttons.primary}](https://projects.eclipse.org/projects/technology.qsos)
- [${m.cta.buttons.secondary}](https://github.com/eclipse-qsos)
- [${m.llms.summary}](${root}llms.txt)`,

    `---

${format(m.footer.copyright, { ccBysa: 'CC BY-SA 4.0', apache: 'Apache-2.0' })}

${m.footer.trademark}`
  ]

  return sections.join('\n\n') + '\n'
}
