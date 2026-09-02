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
  <footer class="footer">
    <div class="footer-container">
      <!-- Project Description -->
      <p class="footer-description">
        {{ $t('footer.description') }}
      </p>

      <!-- Links -->
      <nav class="footer-links">
        <a
          href="https://projects.eclipse.org/projects/technology.qsos"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          {{ $t('footer.links.eclipse') }}
        </a>
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          CC BY-SA 4.0
        </a>
        <a
          href="https://www.apache.org/licenses/LICENSE-2.0"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          Apache-2.0
        </a>
      </nav>

      <!-- Copyright and Licensing -->
      <p class="footer-copyright">
        {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background-color: var(--muted);
  border-top: 1px solid var(--border);
  padding: var(--spacing-2xl) 0;
}

.footer-container {
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--spacing-6xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.footer-description {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--foreground);
  margin: 0;
  font-weight: var(--font-weight-normal);
}

.footer-links {
  display: flex;
  gap: var(--spacing-2xl);
  flex-wrap: wrap;
}

.footer-link {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--foreground);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
  font-weight: var(--font-weight-medium);
}

.footer-link:hover {
  color: var(--brand);
}

.footer-copyright {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
  margin: 0;
  font-weight: var(--font-weight-normal);
}

/* Desktop Layout */
@media (min-width: 769px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: var(--spacing-2xl) var(--spacing-4xl);
  }

  .footer-description {
    grid-column: 1;
    grid-row: 1;
  }

  .footer-links {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
  }

  .footer-copyright {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    padding: 0 var(--spacing-3xl);
    gap: var(--spacing-md);
  }

  .footer-description {
    font-size: var(--font-size-xs);
  }

  .footer-links {
    gap: var(--spacing-lg);
  }

  .footer-link {
    font-size: var(--font-size-xs);
  }

  .footer-copyright {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 var(--spacing-xl);
    gap: var(--spacing-sm);
  }

  .footer-links {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
