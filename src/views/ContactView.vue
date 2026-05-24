<template>
  <section class="section-container contact-view">
    <div class="header-section">
      <h2 class="title-gradient">{{ portfolioData.contact.title }}</h2>
      <div class="line"></div>
    </div>
    
    <div class="contact-content">
      <div class="contact-info">
        <h3>{{ portfolioData.contact.subtitle }}</h3>
        <p>{{ portfolioData.contact.description }}</p>
        
        <div class="info-list">
          <div class="info-item">
            <div class="icon-wrap">📧</div>
            <span>{{ portfolioData.contact.email }}</span>
          </div>
          <div class="info-item">
            <div class="icon-wrap">📍</div>
            <span>{{ portfolioData.contact.location }}</span>
          </div>
          <div class="info-item">
            <div class="icon-wrap">📱</div>
            <span>{{ portfolioData.contact.phone }}</span>
          </div>
        </div>
      </div>
      
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom / Entreprise</label>
          <input type="text" id="name" placeholder="Votre nom" required />
        </div>
        
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="votre@email.com" required />
        </div>
        
        <div class="form-group">
          <label for="subject">Sujet</label>
          <input type="text" id="subject" placeholder="Sujet de votre message" required />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Comment puis-je vous aider ?" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn" :class="{ 'sending': isSending }">
          <span v-if="!isSending">Envoyer le message</span>
          <span v-else>Envoi...</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import portfolioData from '../data/portfolio.json';

const isSending = ref(false);

const submitForm = () => {
  isSending.value = true;
  // Simuler l'envoi
  setTimeout(() => {
    isSending.value = false;
    alert("Message envoyé avec succès ! (Simulation)");
  }, 1500);
};
</script>

<style scoped>
.contact-view {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.icon-wrap {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
}

.contact-form {
  background: rgba(255, 255, 255, 0.02);
  padding: 3rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--neon-pink);
  box-shadow: 0 0 10px rgba(255, 102, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  margin-top: 1rem;
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-cyan));
  border: none;
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.2s ease;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.submit-btn:hover {
  opacity: 0.9;
  box-shadow: 0 0 20px rgba(255, 102, 255, 0.5);
}

.submit-btn:active {
  transform: scale(0.98);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1.5rem;
  }
  .header-section h2 {
    font-size: 2.2rem;
  }
  .contact-info h3 {
    font-size: 1.6rem;
  }
}
</style>
