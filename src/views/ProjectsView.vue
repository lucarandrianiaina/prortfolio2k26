<template>
  <section class="section-container projects-view">
    <div class="header-section">
      <h2 class="title-gradient">{{ portfolioData.projects.title }}</h2>
      <div class="line"></div>
    </div>
    
    <div class="projects-grid">
      <article v-for="project in portfolioData.projects.items" :key="project.id" class="project-card">
        <div class="project-img-wrapper">
          <div class="project-img" :style="{ backgroundImage: 'url(' + project.imageUrl + ')' }"></div>
          <div class="overlay">
            <a :href="project.projectUrl" class="view-btn">Voir le projet</a>
          </div>
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import portfolioData from '../data/portfolio.json';
</script>

<style scoped>
.projects-view {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 102, 255, 0.3);
}

.project-img-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  filter: grayscale(80%);
}

.project-card:hover .project-img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 29, 36, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.project-card:hover .overlay {
  opacity: 1;
}

.view-btn {
  padding: 10px 24px;
  background: transparent;
  border: 2px solid var(--neon-cyan);
  color: var(--neon-cyan);
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.view-btn:hover {
  background: var(--neon-cyan);
  color: var(--bg-color);
  box-shadow: 0 0 15px var(--neon-cyan);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
}

.project-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags span {
  font-size: 0.75rem;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: var(--neon-pink);
  border: 1px solid rgba(255, 102, 255, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
