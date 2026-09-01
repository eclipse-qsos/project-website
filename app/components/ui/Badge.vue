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
  <span class="badge" :class="`badge--${variant}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'outline' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'default'
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-lg);
  white-space: nowrap;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.badge--default {
  background-color: var(--surface);
  color: var(--foreground);
  border: 1px solid var(--border);
}

.badge--outline {
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
}

.badge--secondary {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid transparent;
}

@media (max-width: 768px) {
  .badge {
    font-size: var(--font-size-xs);
    padding: calc(var(--spacing-xs) * 0.75) var(--spacing-sm);
  }
}
</style>
