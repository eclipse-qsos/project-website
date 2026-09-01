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
  <component
    :is="tag"
    class="button"
    :class="[`button--${variant}`, `button--${size}`]"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :target="target"
    :rel="rel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button'
})

const tag = computed(() => props.href !== undefined ? 'a' : 'button')
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}

.button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

/* Variants */
.button--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.button--primary:hover {
  background-color: oklch(0.24 0 0);
}

.button--secondary {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid var(--border);
}

.button--secondary:hover {
  background-color: var(--muted);
}

.button--outline {
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
}

.button--outline:hover {
  background-color: var(--muted);
}

.button--ghost {
  background-color: transparent;
  color: var(--foreground);
}

.button--ghost:hover {
  background-color: var(--muted);
}

/* Sizes */
.button--sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.button--md {
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-base);
}

.button--lg {
  padding: var(--spacing-lg) var(--spacing-3xl);
  font-size: var(--font-size-lg);
}

@media (max-width: 768px) {
  .button--md {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--font-size-sm);
  }

  .button--lg {
    padding: var(--spacing-md) var(--spacing-2xl);
    font-size: var(--font-size-base);
  }
}
</style>
