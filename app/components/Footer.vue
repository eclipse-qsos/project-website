<!--
  Copyright (c) 2026 Contributors to the Eclipse Foundation

  See the NOTICE file(s) distributed with this work for additional
  information regarding copyright ownership.

  This program and the accompanying materials are made available under the
  terms of the Apache License, Version 2.0 which is available at
  https://www.apache.org/licenses/LICENSE-2.0

  SPDX-License-Identifier: Apache-2.0
-->
<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <a
          href="https://www.eclipse.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-logo"
        >
          <img
            src="@/assets/images/eclipse-foundation-logo.svg"
            :alt="$t('footer.logoAlt')"
            class="footer-logo-img footer-logo-img--light"
          />
          <img
            src="@/assets/images/eclipse-foundation-logo-reversed.svg"
            :alt="$t('footer.logoAlt')"
            class="footer-logo-img footer-logo-img--dark"
          />
        </a>

        <i18n-t keypath="footer.description" tag="p" class="footer-description" scope="global">
          <template #project>
            <a
              href="https://projects.eclipse.org/projects/technology.qsos"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >Eclipse QSOS</a>
          </template>
        </i18n-t>
      </div>

      <nav class="footer-links">
        <div v-for="group in linkGroups" :key="group.id" class="footer-group">
          <h2 class="footer-group-title">{{ group.title }}</h2>
          <ul class="footer-group-list">
            <li v-for="link in group.links" :key="link.href">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="footer-legal">
        <i18n-t keypath="footer.copyright" tag="p" class="footer-copyright" scope="global">
          <template #ccBysa>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >{{ $t('footer.links.ccBysa') }}</a>
          </template>
          <template #apache>
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >{{ $t('footer.links.apache') }}</a>
          </template>
        </i18n-t>
        <p class="footer-trademark">
          {{ $t('footer.trademark') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const linkGroups = computed(() => [
  {
    id: 'foundation',
    title: t('footer.groups.foundation'),
    links: [
      { label: t('footer.links.eclipseOrg'), href: 'https://www.eclipse.org/' },
      { label: t('footer.links.codeOfConduct'), href: 'https://www.eclipse.org/org/documents/community-code-of-conduct/' },
      { label: t('footer.links.vulnerability'), href: 'https://www.eclipse.org/security/' },
    ],
  },
  {
    id: 'legal',
    title: t('footer.groups.legal'),
    links: [
      { label: t('footer.links.privacy'), href: 'https://www.eclipse.org/legal/privacy/' },
      { label: t('footer.links.terms'), href: 'https://www.eclipse.org/legal/terms-of-use/' },
      { label: t('footer.links.compliance'), href: 'https://www.eclipse.org/legal/compliance/' },
      { label: t('footer.links.legal'), href: 'https://www.eclipse.org/legal/' },
    ],
  },
])
</script>

<style scoped>
.footer {
  background-color: var(--muted);
  border-top: 1px solid var(--border);
  padding: var(--spacing-2xl) 0;
}

.footer-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--spacing-6xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: var(--max-width-prose);
}

.footer-logo {
  display: inline-flex;
  align-self: flex-start;
}

.footer-logo-img {
  height: 48px;
  width: auto;
}

/* Swap to the reversed logo in dark mode (theme class is set on <html> by useTheme) */
.footer-logo-img--dark {
  display: none;
}

:root.dark .footer-logo-img--light {
  display: none;
}

:root.dark .footer-logo-img--dark {
  display: block;
}

.footer-description {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--foreground);
  margin: 0;
  font-weight: var(--font-weight-normal);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: var(--spacing-2xl) var(--spacing-5xl);
}

.footer-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-group-title {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  margin: 0;
}

.footer-group-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-link {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--foreground);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
  font-weight: var(--font-weight-medium);
}

.footer-link:hover {
  color: var(--brand);
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border);
}

.footer-copyright,
.footer-trademark {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
  font-weight: var(--font-weight-normal);
}

/* Desktop Layout */
@media (min-width: 1025px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: var(--spacing-3xl) var(--spacing-4xl);
  }

  .footer-brand {
    grid-column: 1;
    grid-row: 1;
  }

  .footer-links {
    grid-column: 2;
    grid-row: 1;
  }

  .footer-legal {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-links {
    gap: var(--spacing-2xl) var(--spacing-3xl);
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 var(--spacing-3xl);
    gap: var(--spacing-xl);
  }

  .footer-logo-img {
    height: 40px;
  }

  .footer-description,
  .footer-group-title,
  .footer-link,
  .footer-copyright,
  .footer-trademark {
    font-size: var(--font-size-xs);
  }

  .footer-links {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 var(--spacing-xl);
    gap: var(--spacing-lg);
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
