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
  <section id="why" class="why-open-section">
    <div class="why-open-container">
      <div class="why-open-card">
        <!-- Badge -->
        <div class="why-open-badge">
          <Badge variant="outline">Why open</Badge>
        </div>

        <!-- Title -->
        <h2 class="why-open-title">
          A method that evaluates open source must itself be open.
        </h2>

        <!-- Description -->
        <p class="why-open-description">
          OSS governance cannot be credibly outsourced to proprietary analysts. The community that produces open
          source should also own the tools that assess it, distributed under a free licence to guarantee reuse, objectivity
          and peer-reviewed improvement.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.why-open-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--muted);
}

.why-open-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.why-open-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6xl) var(--spacing-5xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
}

.why-open-badge {
  display: flex;
  margin-bottom: var(--spacing-xl);
}

.why-open-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-2xl) 0;
  text-align: center;
  max-width: 900px;
}

.why-open-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
  text-align: center;
  max-width: var(--max-width-prose);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .why-open-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .why-open-card {
    padding: var(--spacing-5xl) var(--spacing-4xl);
  }

  .why-open-title {
    font-size: var(--font-size-4xl);
  }

  .why-open-description {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 768px) {
  .why-open-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .why-open-card {
    padding: var(--spacing-4xl) var(--spacing-3xl);
  }

  .why-open-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-xl);
  }

  .why-open-description {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  .why-open-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .why-open-card {
    padding: var(--spacing-3xl) var(--spacing-2xl);
  }

  .why-open-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
