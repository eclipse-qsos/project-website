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
  <section id="roadmap" class="roadmap-section">
    <div class="roadmap-container">
      <!-- Title -->
      <h2 class="roadmap-title">
        {{ $t('roadmap.title') }}
      </h2>

      <!-- Timeline -->
      <div class="timeline">
        <!-- Timeline Line -->
        <div class="timeline-line" />

        <!-- Timeline Items -->
        <div class="timeline-items">
          <div
            v-for="phase in roadmapPhases"
            :key="phase.id"
            class="timeline-item"
          >
            <div class="timeline-dot" />
            <div class="timeline-content">
              <h3 class="timeline-title">{{ phase.title }}</h3>
              <p class="timeline-description">{{ phase.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const roadmapPhases = computed(() => [
  {
    id: 'legacy',
    title: t('roadmap.phases.legacy.title'),
    description: t('roadmap.phases.legacy.description'),
  },
  {
    id: 'reboot',
    title: t('roadmap.phases.reboot.title'),
    description: t('roadmap.phases.reboot.description'),
  },
  {
    id: 'eclipse',
    title: t('roadmap.phases.eclipse.title'),
    description: t('roadmap.phases.eclipse.description'),
  },
  {
    id: 'qsos-agent',
    title: t('roadmap.phases.qsos-agent.title'),
    description: t('roadmap.phases.qsos-agent.description'),
  },
])
</script>

<style scoped>
.roadmap-section {
  padding: var(--spacing-7xl) var(--spacing-3xl);
  background-color: var(--muted);
}

.roadmap-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roadmap-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--foreground);
  margin: 0 0 var(--spacing-6xl) 0;
  text-align: center;
}

/* Timeline */
.timeline {
  width: 100%;
  position: relative;
  margin-top: var(--spacing-4xl);
}

.timeline-line {
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--border);
  z-index: 0;
}

.timeline-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-3xl);
  position: relative;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.timeline-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--brand);
  border: 3px solid var(--muted);
  margin-bottom: var(--spacing-lg);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.timeline-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-snug);
  color: var(--foreground);
  margin: 0;
}

.timeline-description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .roadmap-section {
    padding: var(--spacing-6xl) var(--spacing-2xl);
  }

  .roadmap-title {
    font-size: var(--font-size-4xl);
  }

  .timeline-items {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-4xl) var(--spacing-3xl);
  }

  .timeline-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .roadmap-section {
    padding: var(--spacing-5xl) var(--spacing-xl);
  }

  .roadmap-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4xl);
  }

  .timeline {
    padding-left: var(--spacing-2xl);
  }

  .timeline-items {
    grid-template-columns: 1fr;
    gap: 0;
    position: relative;
  }

  /* Vertical line connecting all dots */
  .timeline-items::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background-color: var(--border);
    z-index: 0;
  }

  .timeline-item {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding-bottom: var(--spacing-3xl);
  }

  .timeline-item:last-child {
    padding-bottom: 0;
  }

  .timeline-dot {
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .timeline-content {
    padding-top: 2px;
  }

  .timeline-title {
    font-size: var(--font-size-lg);
  }

  .timeline-description {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  .roadmap-section {
    padding: var(--spacing-4xl) var(--spacing-lg);
  }

  .roadmap-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
