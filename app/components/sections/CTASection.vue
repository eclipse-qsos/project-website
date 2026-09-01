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
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-card">
        <!-- Headline -->
        <h2 class="cta-headline">
          Join and contribute to Eclipse-QSOS.
        </h2>

        <!-- Supporting Text -->
        <p class="cta-text">
          Help build the open standard for qualifying open source software.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <Button
            variant="primary"
            size="lg"
            href="https://www.eclipse.org/projects/project.php?id=technology.qsos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the project
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/eclipse-qsos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--background);
}

.cta-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
}

.cta-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6xl) var(--spacing-4xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-xl);
}

.cta-headline {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0;
}

.cta-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--brand);
  margin: 0;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cta-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .cta-headline {
    font-size: var(--font-size-4xl);
  }

  .cta-text {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .cta-card {
    padding: var(--spacing-4xl) var(--spacing-2xl);
    gap: var(--spacing-lg);
  }

  .cta-headline {
    font-size: var(--font-size-3xl);
  }

  .cta-text {
    font-size: var(--font-size-base);
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
    gap: var(--spacing-md);
  }

  .cta-buttons :deep(.button) {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .cta-card {
    padding: var(--spacing-3xl) var(--spacing-xl);
  }

  .cta-headline {
    font-size: var(--font-size-2xl);
  }

  .cta-text {
    font-size: var(--font-size-sm);
  }
}
</style>
