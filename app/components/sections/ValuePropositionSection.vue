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
  <section id="value" class="value-proposition-section">
    <div class="value-container">
      <!-- Badge -->
      <div class="value-badge">
        <Badge variant="outline">{{ $t('value.badge') }}</Badge>
      </div>

      <!-- Title -->
      <h2 class="value-title">
        {{ $t('value.title') }}
      </h2>

      <!-- Value Proposition Cards -->
      <div class="value-cards">
        <Card
          v-for="value in valuePropositions"
          :key="value.id"
          :id="value.id"
          :variant="'value'"
          :title="value.title"
          :description="value.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const valuePropositions = computed(() => [
  {
    id: 'defensibility',
    title: t('value.cards.defensibility.title'),
    description: t('value.cards.defensibility.description'),
  },
  {
    id: 'reusability',
    title: t('value.cards.reusability.title'),
    description: t('value.cards.reusability.description'),
  },
  {
    id: 'auditability',
    title: t('value.cards.auditability.title'),
    description: t('value.cards.auditability.description'),
  },
  {
    id: 'floss-depth',
    title: t('value.cards.flossDepth.title'),
    description: t('value.cards.flossDepth.description'),
  },
  {
    id: 'mutualization',
    title: t('value.cards.mutualization.title'),
    description: t('value.cards.mutualization.description'),
  },
  {
    id: 'contexte-weighted',
    title: t('value.cards.contextWeighted.title'),
    description: t('value.cards.contextWeighted.description'),
  },
])
</script>

<style scoped>
.value-proposition-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--surface);
}

.value-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value-badge {
  display: flex;
  margin-bottom: var(--spacing-lg);
}

.value-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-6xl) 0;
  text-align: center;
  max-width: 900px;
}

/* Value Proposition Cards */
.value-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
  width: 100%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .value-proposition-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .value-title {
    font-size: var(--font-size-4xl);
  }

  .value-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .value-proposition-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .value-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4xl);
  }

  .value-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .value-proposition-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .value-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
