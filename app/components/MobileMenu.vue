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
  <div>
    <button
      class="mobile-menu-button"
      @click="isOpen = !isOpen"
      :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      :aria-expanded="isOpen"
    >
      <Icon v-if="!isOpen" name="lucide:menu" />
      <Icon v-else name="lucide:x" />
    </button>

    <div
      class="mobile-menu-overlay"
      :class="{ active: isOpen }"
      @click="isOpen = false"
    />

    <nav class="mobile-menu" :class="{ active: isOpen }">
      <ul class="mobile-nav-menu">
        <li>
          <a href="#method" @click="handleNavClick">Method</a>
        </li>
        <li>
          <a href="#maturity" @click="handleNavClick">Maturity</a>
        </li>
        <li>
          <a href="#why" @click="handleNavClick">Why</a>
        </li>
        <li>
          <a href="#roadmap" @click="handleNavClick">Roadmap</a>
        </li>
      </ul>
      <button class="cta-button mobile-cta" @click="handleCTAClick">
        Join Eclipse-QSOS
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const handleNavClick = (event: Event) => {
  event.preventDefault()
  const target = event.target as HTMLAnchorElement
  const href = target.getAttribute('href')
  if (href) {
    scrollToSection(href.substring(1))
    isOpen.value = false
  }
}

const handleCTAClick = () => {
  console.log('Join Eclipse-QSOS clicked')
  isOpen.value = false
}

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

onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      isOpen.value = false
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>
