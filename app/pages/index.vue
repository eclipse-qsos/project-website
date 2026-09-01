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
  <div class="landing-page">
    <HeroSection />

    <section id="method" class="section">
      <div class="section-content">
        <h1>Method</h1>
        <p>The QSOS method will be described here.</p>
      </div>
    </section>

    <section id="maturity" class="section">
      <div class="section-content">
        <h1>Maturity</h1>
        <p>Information about software maturity assessment.</p>
      </div>
    </section>

    <section id="why" class="section">
      <div class="section-content">
        <h1>Why</h1>
        <p>Why use QSOS for your open source software selection.</p>
      </div>
    </section>

    <section id="roadmap" class="section">
      <div class="section-content">
        <h1>Roadmap</h1>
        <p>Our roadmap and future plans.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.landing-page {
  width: 100%;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl);
}

.section:nth-child(odd) {
  background-color: var(--background);
}

.section:nth-child(even) {
  background-color: var(--surface);
}

.section-content {
  max-width: var(--max-width-container);
  width: 100%;
  text-align: center;
}

.section-content h1 {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  color: var(--foreground);
}

.section-content p {
  font-size: var(--font-size-xl);
  color: var(--muted-foreground);
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-lg);
  }

  .section-content h1 {
    font-size: var(--font-size-3xl);
  }

  .section-content p {
    font-size: var(--font-size-base);
  }
}
</style>
