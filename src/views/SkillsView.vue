<template>
  <section class="section-container skills-view">
    <div class="header-section">
      <h2 class="title-gradient">{{ portfolioData.skills.title }}</h2>
      <div class="line"></div>
    </div>
    
    <div class="skills-grid">
      <div 
        v-for="(category, index) in portfolioData.skills.categories" 
        :key="category.name" 
        class="skill-category fade-in" 
        :class="{ 'delay-1': index > 0 }"
      >
        <h3>{{ category.name }}</h3>
        <ul class="skill-list">
          <li v-for="skill in category.items" :key="skill.name">
            <div class="skill-info"><span>{{ skill.name }}</span><span class="percent">{{ skill.percent }}%</span></div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.percent + '%' }"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolioData from '../data/portfolio.json';
</script>

<style scoped>
.skills-view {
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
  background: linear-gradient(90deg, var(--neon-cyan) 0%, transparent 100%);
  opacity: 0.5;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
}

.skill-category h3 {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.skill-list li {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.percent {
  color: var(--neon-cyan);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-cyan));
  border-radius: 4px;
  box-shadow: 0 0 10px var(--neon-cyan);
  transition: width 1.5s cubic-bezier(0.1, 0.5, 0.1, 1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
