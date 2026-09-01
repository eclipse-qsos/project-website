/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
      localStorage.setItem('theme', theme.value)
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
      theme.value = saved || 'light'
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
    }
  }

  return {
    theme: readonly(theme),
    toggleTheme,
    initTheme,
  }
}
