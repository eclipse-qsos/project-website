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
  <div class="language-switcher">
    <button
      :class="{ active: locale === 'en' }"
      @click="setLocale('en')"
      aria-label="Switch to English"
    >
      EN
    </button>
    <button
      :class="{ active: locale === 'fr' }"
      @click="setLocale('fr')"
      aria-label="Switch to French"
    >
      FR
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
</script>
