<template>
  <header class="app-header">
    <div class="logo">
      <router-link to="/" @click="isMenuOpen = false">
        <span class="logo-text">LU<span class="logo-accent">CA</span></span>
      </router-link>
    </div>
    
    <button 
      class="mobile-toggle" 
      @click="isMenuOpen = !isMenuOpen" 
      aria-label="Afficher le menu"
    >
      <span class="bar" :class="{ 'open-top': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open-mid': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open-bot': isMenuOpen }"></span>
    </button>

    <nav class="nav-links" :class="{ 'nav-active': isMenuOpen }">
      <router-link to="/" active-class="active" @click="isMenuOpen = false">Accueil</router-link>
      <router-link to="/about" active-class="active" @click="isMenuOpen = false">À propos</router-link>
      <router-link to="/skills" active-class="active" @click="isMenuOpen = false">Compétences</router-link>
      <router-link to="/projects" active-class="active" @click="isMenuOpen = false">Projets</router-link>
      <router-link to="/contact" active-class="active" @click="isMenuOpen = false">Contact</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background: rgba(26, 29, 36, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 2px;
}

.logo-accent {
  color: var(--neon-cyan);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--neon-pink);
  box-shadow: 0 0 8px var(--neon-pink);
  border-radius: 2px;
}

/* Menu Mobile: Bouton Hamburger */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.mobile-toggle .bar {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--text-primary);
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

/* Animations Hamburger */
.bar.open-top {
  transform: translateY(8px) rotate(45deg);
  background-color: var(--neon-pink);
}
.bar.open-mid {
  opacity: 0;
}
.bar.open-bot {
  transform: translateY(-8px) rotate(-45deg);
  background-color: var(--neon-cyan);
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 1.5rem;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .nav-links {
    position: absolute;
    top: var(--header-height);
    right: 0;
    width: 100%;
    background: rgba(26, 29, 36, 0.98);
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid var(--neon-cyan);
    
    /* Animation pour le tiroir glissant */
    transform: translateY(-200%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
  }
  
  .nav-links.nav-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
