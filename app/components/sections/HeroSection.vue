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
  <section class="hero hero-section">
    <div class="hero-container content">
      <div class="hero-badge">
        <Badge variant="outline">{{ $t('hero.badge') }}</Badge>
      </div>

      <h1 class="hero-title">
        {{ $t('hero.title') }}
        <span class="hero-title-accent">{{ $t('hero.titleAccent') }}</span>
      </h1>

      <p class="hero-description">
        {{ $t('hero.description') }}
      </p>

      <div class="hero-ctas">
        <Button
          variant="primary"
          size="lg"
          href="https://projects.eclipse.org/projects/technology.qsos"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('hero.cta.join') }}
        </Button>
        <Button variant="secondary" size="lg" href="#method">
          {{ $t('hero.cta.method') }}
        </Button>
      </div>

      <div class="hero-footer">
        <h2 class="visually-hidden">{{ $t('hero.glance') }}</h2>

        <ul class="hero-metadata">
          <li>
            <Icon name="lucide:file-text" />
            <span>CC BY-SA 4.0 {{ $t('hero.metadata.artifacts') }}</span>
          </li>
          <li>
            <Icon name="lucide:code" />
            <span>Apache-2.0 {{ $t('hero.metadata.tooling') }}</span>
          </li>
          <li>
            <Icon name="lucide:shield-check" />
            <span>Eclipse {{ $t('hero.metadata.governance') }}</span>
          </li>
        </ul>

        <!-- Key Metrics -->
        <div class="hero-metrics">
          <div v-for="metric in keyMetrics" :key="metric.label" class="metric-item">
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="radar-container">
      <RadarWatermark />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const keyMetrics = computed(() => [
  { value: '4', label: t('hero.metrics.steps') },
  { value: '16', label: t('hero.metrics.criteria') },
  { value: '0 - 2', label: t('hero.metrics.scale') },
  { value: '2.0', label: t('hero.metrics.version') },
])
</script>

<style scoped>
/* Layout  */
.hero-section {
  position: relative;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 2;
}

.radar-container {
  position: absolute;
  top: 40%;
  right: -2%;
  width: 600px;
  height: 600px;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
}

.hero {
  padding: calc(var(--header-height) - 20px) var(--spacing-3xl) var(--spacing-7xl);
  background-color: var(--background);
}

.hero-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-badge {
  display: flex;
  margin-bottom: var(--spacing-sm);
}

.hero-title {
  font-size: var(--font-size-6xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-lg) 0;
  max-width: 900px;
}

.hero-title-accent {
  color: var(--brand);
}

.hero-description {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0 0 var(--spacing-xl) 0;
  max-width: var(--max-width-prose);
}

.hero-ctas {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-md);
}

.hero-footer {
  margin-top: 0;
  padding-top: var(--spacing-md);
  padding-bottom: var(--spacing-2xl);
  width: 100%;
}

.hero-metadata {
  display: flex;
  gap: var(--spacing-4xl);
  list-style: none;
  padding: 0;
  margin: 0;
}

.hero-metadata li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--muted-foreground);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.hero-metadata li svg {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--brand);
}

/* Key Metrics */
.hero-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--border);
}

.metric-item {
  text-align: center;
  padding: var(--spacing-sm) 0;
  transition: all 0.2s ease;
}

.metric-item:hover {
  transform: translateY(-2px);
}

.metric-value {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-2xs);
  letter-spacing: -0.02em;
  color: var(--foreground);
}

.metric-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--muted-foreground);
  line-height: var(--line-height-snug);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .radar-container { 
    right: -10%;
    width: 500px;
    height: 500px;
  }

  .hero {
    padding: calc(var(--header-height) + var(--spacing-xs)) var(--spacing-2xl) var(--spacing-6xl);
  }

  .hero-title {
    font-size: var(--font-size-5xl);
  }

  .hero-description {
    font-size: var(--font-size-lg);
  }

  .hero-metadata {
    gap: var(--spacing-3xl);
  }

  .hero-metrics {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
    padding-top: var(--spacing-2xl);
  }

  .metric-value {
    font-size: var(--font-size-3xl);
  }

  .metric-label {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 768px) {
  .radar-container { 
    right: -5%;
    top: 20%;
    width: 470px;
    height: 470px;
  }

  .hero {
    padding: calc(var(--header-height) + var(--spacing-xs)) var(--spacing-xl) var(--spacing-5xl);
  }

  .hero-container {
    gap: var(--spacing-3xl);
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-description {
    font-size: var(--font-size-base);
  }

  .hero-ctas {
    flex-direction: column;
    width: 100%;
  }

  .hero-metadata {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .hero-footer {
    margin-top: 0;
    padding-top: var(--spacing-md);
    padding-bottom: var(--spacing-2xl);
  }
}

@media (max-width: 480px) {
  .radar-container {
      right: -10%;
      top: 15%;
      width: 350px;
      height: 350px;
    }

  .hero {
    padding: calc(var(--header-height) + var(--spacing-xs)) var(--spacing-lg) var(--spacing-4xl);
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-description {
    font-size: var(--font-size-sm);
  }
}
</style>
