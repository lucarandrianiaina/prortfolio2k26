<template>
  <footer class="app-footer">
    <div class="footer-top">
      <div class="footer-col brand-col">
        <span class="logo-text">LU<span class="logo-accent">CA</span></span>
        <p class="brand-desc">
          {{ portfolioData.global.resumeText }}
        </p>
      </div>
      
      <div class="footer-col links-col">
        <h4>Navigation</h4>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/skills">Compétences</router-link></li>
          <li><router-link to="/projects">Projets</router-link></li>
        </ul>
      </div>

      <div class="footer-col contact-col">
        <h4>Contact</h4>
        <ul>
          <li>{{ portfolioData.contact.email }}</li>
          <li>{{ portfolioData.contact.phone }}</li>
          <li>{{ portfolioData.contact.location }}</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} RANDRIANIAINA Onjaniriana Jean Luca. Tous droits réservés.</p>
      <div class="social-links">
        <a :href="portfolioData.global.social.github" aria-label="GitHub" target="_blank" rel="noopener">GitHub</a>
        <a :href="portfolioData.global.social.linkedin" aria-label="LinkedIn" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="portfolioData.global.social.twitter" aria-label="Twitter" target="_blank" rel="noopener">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import portfolioData from '../data/portfolio.json';
</script>

<style scoped>
.app-footer {
  background: rgba(21, 24, 30, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem 4rem 2rem 4rem;
  margin-top: auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-inline: auto;
}

.footer-col h4 {
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 2px;
  display: block;
  margin-bottom: 1rem;
}

.logo-accent {
  color: var(--neon-cyan);
}

.brand-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  max-width: 400px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 0.8rem;
}

.footer-col ul li a,
.footer-col ul li {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-col ul li a:hover {
  color: var(--neon-pink);
  padding-left: 5px; /* Petit effet interactif */
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--neon-cyan);
}

/* Soulignement stylisé au hover pour les liens sociaux */
.social-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--neon-cyan);
  transition: width 0.3s ease;
}

.social-links a:hover::after {
  width: 100%;
}

@media (max-width: 968px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
