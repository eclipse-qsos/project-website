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
  <article class="card" :data-card-id="id">
    <!-- Top color indicator (optional, for steps) -->
    <div 
      v-if="color && variant === 'step'" 
      class="card-indicator" 
      :style="{ backgroundColor: color }"
    ></div>

    <!-- Badge/Label (optional, for steps) -->
    <div v-if="label" class="card-label">{{ label }}</div>

    <!-- Title -->
    <h3 class="card-title" :style="variant === 'step' && color ? { color: color } : {}">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="card-description">{{ description }}</p>

    <!-- Topics list (optional, for criteria) -->
    <ul v-if="topics && topics.length > 0" class="card-topics">
      <li v-for="(topic, index) in topics" :key="index">
        {{ topic }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
  description: string
  variant?: 'step' | 'criteria'
  color?: string
  label?: string
  topics?: string[]
}

withDefaults(defineProps<Props>(), {
  variant: 'criteria',
  color: undefined,
  label: undefined,
  topics: () => [],
})
</script>

<style scoped>
.card {
  position: relative;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  overflow: hidden;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Top color indicator for steps */
.card-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
}

/* Label (for step number) */
.card-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--muted-foreground);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

/* Title */
.card-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0;
}

/* Description */
.card-description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
}

/* Topics list (for criteria cards) */
.card-topics {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md) var(--spacing-xl);
}

.card-topics li {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--foreground);
  position: relative;
  padding-left: var(--spacing-lg);
}

.card-topics li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--muted-foreground);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .card {
    padding: var(--spacing-2xl);
    gap: var(--spacing-lg);
  }

  .card-title {
    font-size: var(--font-size-2xl);
  }

  .card-description {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-xl);
  }

  .card-title {
    font-size: var(--font-size-xl);
  }

  .card-topics {
    gap: var(--spacing-sm) var(--spacing-lg);
  }

  .card-topics li {
    font-size: var(--font-size-xs);
  }
}
</style>
