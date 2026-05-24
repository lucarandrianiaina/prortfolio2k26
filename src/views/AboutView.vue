<template>
  <section class="section-container about-view">
    <div class="header-section">
      <h2 class="title-gradient">{{ portfolioData.about.title }}</h2>
      <div class="line"></div>
    </div>
    
    <div class="about-content">
      <div class="about-text">
        <p v-for="(paragraph, index) in portfolioData.about.paragraphs" :key="index" :class="{ highlight: index === 0 }">
          {{ paragraph }}
        </p>
      </div>
      
      <div class="about-stats">
        <div v-for="(stat, index) in portfolioData.about.stats" :key="index" class="stat-card">
          <h3>{{ stat.value }}</h3>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolioData from '../data/portfolio.json';
</script>

<style scoped>
.about-view {
  animation: fadeIn 0.8s ease-out;
}

.header-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.header-section h2 {
  font-size: 3rem;
  white-space: nowrap;
}

.line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-pink) 0%, transparent 100%);
  opacity: 0.5;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-text p {
  margin-bottom: 1.5rem;
}

.highlight {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 500;
  border-left: 4px solid var(--neon-cyan);
  padding-left: 1rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 102, 255, 0.2);
}

.stat-card h3 {
  font-size: 3rem;
  color: var(--neon-cyan);
  margin-bottom: 0.5rem;
}

.stat-card span {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
