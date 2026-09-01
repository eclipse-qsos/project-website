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
  <section class="hero">
    <div class="hero-container">
      <!-- Badge -->
      <div class="hero-badge">
        <Badge variant="outline">Open method · Eclipse Foundation</Badge>
      </div>

      <!-- Headline -->
      <h1 class="hero-title">
        Qualify and select your open source software with
        <span class="hero-title-accent">method and structure</span>
      </h1>

      <!-- Description -->
      <p class="hero-description">
        QSOS is a free and open methodology to describe, evaluate and compare open source software in order to make decisions transparent, auditable, documented and reproductible.
      </p>

      <!-- CTAs -->
      <div class="hero-ctas">
        <Button
          variant="primary"
          size="lg"
          href="https://projects.eclipse.org/projects/technology.qsos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join & Contribute
        </Button>
        <Button variant="secondary" size="lg" href="#method">
          See the Method
        </Button>
      </div>

      <!-- Metadata Footer -->
      <div class="hero-footer">
        <ul class="hero-metadata">
          <li>
            <Icon name="lucide:file-text" />
            <span>CC BY-SA 4.0 artefacts</span>
          </li>
          <li>
            <Icon name="lucide:code" />
            <span>Apache-2.0 tooling</span>
          </li>
          <li>
            <Icon name="lucide:shield-check" />
            <span>Eclipse-governed</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  padding: calc(var(--header-height) + var(--spacing-xs)) var(--spacing-3xl) var(--spacing-7xl);
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
  margin-bottom: var(--spacing-md);
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
  margin-bottom: var(--spacing-lg);
}

.hero-footer {
  margin-top: 0;
  padding-top: var(--spacing-lg);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--border);
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

/* Responsive Design */
@media (max-width: 1024px) {
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
}

@media (max-width: 768px) {
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
