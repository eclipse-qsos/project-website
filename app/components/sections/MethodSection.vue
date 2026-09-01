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
  <section id="method" class="method-section">
    <div class="method-container">
      <!-- Badge -->
      <div class="method-badge">
        <Badge variant="outline">The Method</Badge>
      </div>

      <!-- Title -->
      <h2 class="method-title">
        Four steps, one repeatable process
      </h2>

      <!-- Description -->
      <p class="method-description">
        Each step produces reusable artefacts, so evaluations can be shared, challenged
        and updated over time instead of being rebuilt from scratch.
      </p>

      <!-- Method Steps Cards -->
      <div class="method-cards">
        <StepCard
          v-for="step in methodSteps"
          :key="step.number"
          :id="step.id"
          :number="step.number"
          :title="step.title"
          :description="step.description"
          :color="step.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const methodSteps = [
  {
    id: 'define',
    number: 1,
    title: 'Define',
    description: 'Frame the reference data: software families, evaluation grids and the criteria that matter for your context.',
    color: 'var(--color-define)',
  },
  {
    id: 'evaluate',
    number: 2,
    title: 'Evaluate',
    description: 'Score each candidate against maturity and functional criteria on a simple, auditable 0–1–2 scale.',
    color: 'var(--color-evaluate)',
  },
  {
    id: 'qualify',
    number: 3,
    title: 'Qualify',
    description: 'Weight the criteria according to your own requirements, constraints and risk appetite.',
    color: 'var(--color-qualify)',
  },
  {
    id: 'select',
    number: 4,
    title: 'Select',
    description: 'Compare weighted results side by side and document a decision anyone can reproduce.',
    color: 'var(--color-select)',
  },
]
</script>

<style scoped>
.method-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--surface);
}

.method-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.method-badge {
  display: flex;
  margin-bottom: var(--spacing-lg);
}

.method-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  max-width: 900px;
}

.method-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0 0 var(--spacing-6xl) 0;
  text-align: center;
  max-width: var(--max-width-prose);
}

/* Method Steps Cards */
.method-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2xl);
  width: 100%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .method-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .method-title {
    font-size: var(--font-size-4xl);
  }

  .method-description {
    font-size: var(--font-size-base);
  }

  .method-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .method-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .method-title {
    font-size: var(--font-size-3xl);
  }

  .method-description {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-4xl);
  }

  .method-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .method-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .method-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
