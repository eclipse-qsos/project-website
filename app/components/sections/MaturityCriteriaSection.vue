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
  <section id="maturity" class="maturity-criteria-section">
    <div class="maturity-container">
      <!-- Badge -->
      <div class="maturity-badge">
        <Badge variant="outline">2.0 method</Badge>
      </div>

      <!-- Title -->
      <h2 class="maturity-title">
        Maturity criteria
      </h2>

      <!-- Criteria Cards -->
      <div class="maturity-cards">
        <Card
          v-for="criteria in maturityCriteria"
          :key="criteria.id"
          :id="criteria.id"
          :variant="'criteria'"
          :title="criteria.title"
          :description="criteria.description"
          :topics="criteria.topics"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const maturityCriteria = [
  {
    id: 'legacy',
    title: 'Legacy',
    description: "Project's history and heritage",
    topics: ['Age', 'History', 'Core team', 'Popularity'],
  },
  {
    id: 'activity',
    title: 'Activity',
    description: 'Activity inside and around the project',
    topics: [
      'Contributing community',
      'Activity on bugs',
      'Activity on functionalities',
      'Activity on releases/versions',
    ],
  },
  {
    id: 'governance',
    title: 'Governance',
    description: "Project's strategy",
    topics: [
      'Copyright holders',
      'Roadmap',
      'Project management',
      'Distribution mode',
    ],
  },
  {
    id: 'industrialization',
    title: 'Industrialization',
    description: 'Industrialization level of the project',
    topics: [
      'Services',
      'Documentation',
      'Quality assurance',
      'Source code modification',
    ],
  },
]
</script>

<style scoped>
.maturity-criteria-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--background);
}

.maturity-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.maturity-badge {
  display: flex;
  margin-bottom: var(--spacing-lg);
}

.maturity-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-6xl) 0;
  text-align: center;
  max-width: 900px;
}

/* Maturity Criteria Cards */
.maturity-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
  width: 100%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .maturity-criteria-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .maturity-title {
    font-size: var(--font-size-4xl);
  }

  .maturity-cards {
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .maturity-criteria-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .maturity-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4xl);
  }

  .maturity-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .maturity-criteria-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .maturity-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
