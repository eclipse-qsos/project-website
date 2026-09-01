<template>
  <div class="landing-page">
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
  padding: 2rem;
}

.section:nth-child(odd) {
  background-color: var(--background);
}

.section:nth-child(even) {
  background-color: var(--surface);
}

.section-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.section-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--foreground);
}

.section-content p {
  font-size: 1.25rem;
  color: var(--muted-foreground);
}

@media (max-width: 768px) {
  .section {
    padding: 1rem;
  }

  .section-content h1 {
    font-size: 2rem;
  }

  .section-content p {
    font-size: 1rem;
  }
}
</style>
