<template>
  <section class="hero-section">
    <!-- Fond Décoratif (Géométrie Neon) -->
    <div class="geometry-bg">
      <div class="stripe pink-stripe"></div>
      <div class="stripe cyan-stripe"></div>
    </div>
    
    <div class="hero-content">
      <div class="text-content">
        <h1 class="main-title">
          {{ portfolioData.home.titleLine1 }}<br/>
          <span class="title-gradient">{{ portfolioData.home.titleLine2 }}</span>
        </h1>
        <p class="subtitle">
          {{ portfolioData.home.subtitle }}
        </p>
        <div class="actions">
          <router-link to="/projects" class="btn-primary">{{ portfolioData.home.ctaProjects }}</router-link>
          <router-link to="/contact" class="btn-secondary">{{ portfolioData.home.ctaContact }}</router-link>
        </div>
      </div>
      
      <div class="image-content">
        <div class="image-wrapper">
          <!-- Placeholder image -->
          <div class="placeholder-img" title="Photo de RANDRIANIAINA Onjaniriana Jean Luca"></div>
          
          <div class="overlay-glass"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolioData from '../data/portfolio.json';
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 4rem;
}

/* Background Geometry matches the design */
.geometry-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.stripe {
  position: absolute;
  transform: skewX(-25deg);
}

.pink-stripe {
  background: var(--neon-pink);
  width: 300px;
  height: 150%;
  top: -20%;
  left: 10%;
  opacity: 0.15;
  filter: blur(40px);
}

.cyan-stripe {
  background: var(--neon-cyan);
  width: 200px;
  height: 150%;
  top: -20%;
  right: 20%;
  opacity: 0.1;
  filter: blur(60px);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  max-width: 600px;
}

.main-title {
  font-size: 5rem;
  line-height: 1.1;
  font-weight: 900;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1.5rem;
}

.btn-secondary {
  display: inline-block;
  padding: 12px 30px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid var(--neon-pink);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.btn-secondary:hover {
  text-shadow: 0 0 8px var(--neon-pink);
  box-shadow: 0 8px 15px -10px var(--neon-pink);
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 380px;
  height: 480px;
  border-radius: 12px;
  /* On retire overflow: hidden pour laisser les cadres néons déborder */
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.image-wrapper::before {
  content: '';
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--neon-pink);
  box-shadow: 0 0 25px rgba(255, 102, 255, 0.3);
  border-radius: 12px;
  z-index: 0;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url('/profile.png');
  background-size: cover;
  background-position: center top;
  border-radius: 12px;
  position: relative;
  z-index: 2;
  /* On enlève le gris et on ajoute juste un peu de contraste et saturation pour mettre en valeur les couleurs */
  filter: contrast(1.05) saturate(1.1);
}

.overlay-glass {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid var(--neon-cyan);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  border-radius: 12px;
  z-index: 1; /* Derrière l'image, ou juste posé en décalé */
}

@media (max-width: 968px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 4rem;
    padding: 2rem 0;
  }
  
  .text-content {
    margin: 0 auto;
  }
  
  .actions {
    justify-content: center;
  }
  
  .main-title {
    font-size: 3.5rem;
  }
  
  .image-wrapper {
    width: 300px;
    height: 400px;
  }
}
</style>
