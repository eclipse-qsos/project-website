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
  <article class="step-card" :data-step="id">
    <div class="step-indicator" :style="{ backgroundColor: color }"></div>
    <div class="step-number">Step {{ number }}</div>
    <h3 class="step-title" :style="{ color: color }">{{ title }}</h3>
    <p class="step-description">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: string
  number: number
  title: string
  description: string
  color: string
}

defineProps<Props>()
</script>

<style scoped>
.step-card {
  position: relative;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-3xl);
  transition: all 0.3s ease;
  overflow: hidden;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.step-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
}

.step-number {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--muted-foreground);
  margin-bottom: var(--spacing-lg);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.step-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin: 0 0 var(--spacing-lg) 0;
}

.step-description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .step-card {
    padding: var(--spacing-2xl);
  }

  .step-title {
    font-size: var(--font-size-2xl);
  }

  .step-description {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 768px) {
  .step-card {
    padding: var(--spacing-xl);
  }

  .step-title {
    font-size: var(--font-size-xl);
  }
}
</style>
