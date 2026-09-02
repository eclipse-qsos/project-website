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
  <header class="site-header">
    <div class="header-container">
      <a href="#" class="header-logo" @click.prevent="scrollToTop">
        <img src="@/assets/images/logo-qsos.png" alt="QSOS Logo" />
      </a>

      <nav class="header-nav">
        <ul class="nav-menu">
          <li>
            <a href="#method" @click.prevent="scrollToSection('method')">{{ $t('header.nav.method') }}</a>
          </li>
          <li>
            <a href="#maturity" @click.prevent="scrollToSection('maturity')">{{ $t('header.nav.maturity') }}</a>
          </li>
          <li>
            <a href="#why" @click.prevent="scrollToSection('why')">{{ $t('header.nav.why') }}</a>
          </li>
          <li>
            <a href="#roadmap" @click.prevent="scrollToSection('roadmap')">{{ $t('header.nav.roadmap') }}</a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button class="cta-button" @click="handleCTAClick">
          {{ $t('header.cta') }}
        </button>
        <MobileMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleCTAClick = () => {
  console.log('Join Eclipse-QSOS clicked')
}
</script>
