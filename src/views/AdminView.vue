<template>
  <div class="admin-dashboard">
    <div class="admin-header">
      <div class="logo">LU<span class="logo-accent">CA</span> - <span class="admin-badge">Admin Panel</span></div>
      <button class="save-btn" @click="saveData" :class="{ saved: saveStatus === 'success', error: saveStatus === 'error' }">
        {{ saveLabel }}
      </button>
    </div>

    <div v-if="formData" class="admin-layout">
      <!-- Menu Latéral pour les Onglets -->
      <div class="admin-sidebar">
        <button @click="activeTab = 'home'" :class="{ active: activeTab === 'home' }">🏠 Accueil</button>
        <button @click="activeTab = 'about'" :class="{ active: activeTab === 'about' }">👤 À Propos</button>
        <button @click="activeTab = 'skills'" :class="{ active: activeTab === 'skills' }">⚡ Compétences</button>
        <button @click="activeTab = 'projects'" :class="{ active: activeTab === 'projects' }">💼 Projets</button>
        <button @click="activeTab = 'contact'" :class="{ active: activeTab === 'contact' }">✉️ Contact</button>
        <button @click="activeTab = 'global'" :class="{ active: activeTab === 'global' }">🌐 Global</button>
      </div>

      <!-- Contenu Formulaire de l'Onglet Actif -->
      <div class="admin-content">
        
        <!-- SECTION GLOBAL -->
        <div v-if="activeTab === 'global'" class="tab-pane">
          <h3>Paramètres Globaux</h3>
          <div class="form-group">
            <label>Nom complet</label>
            <input v-model="formData.global.fullname" />
          </div>
          <div class="form-group">
            <label>Texte Résumé (Footer)</label>
            <textarea v-model="formData.global.resumeText" rows="3"></textarea>
          </div>
          <h4>Réseaux Sociaux</h4>
          <div class="form-group"><label>GitHub URL</label><input v-model="formData.global.social.github" /></div>
          <div class="form-group"><label>LinkedIn URL</label><input v-model="formData.global.social.linkedin" /></div>
          <div class="form-group"><label>Twitter URL</label><input v-model="formData.global.social.twitter" /></div>
        </div>

        <!-- SECTION HOME -->
        <div v-if="activeTab === 'home'" class="tab-pane">
          <h3>Section: Hero (Accueil)</h3>
          <div class="form-group">
            <label>Titre Principal (Ligne 1)</label>
            <input v-model="formData.home.titleLine1" />
          </div>
          <div class="form-group">
            <label>Titre Néon (Ligne 2)</label>
            <input v-model="formData.home.titleLine2" />
          </div>
          <div class="form-group">
            <label>Sous-titre accrocheur</label>
            <textarea v-model="formData.home.subtitle" rows="3"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Bouton Projets</label><input v-model="formData.home.ctaProjects" /></div>
            <div class="form-group"><label>Bouton Contact</label><input v-model="formData.home.ctaContact" /></div>
          </div>
        </div>

        <!-- SECTION ABOUT -->
        <div v-if="activeTab === 'about'" class="tab-pane">
          <h3>Section: À Propos</h3>
          <div class="form-group">
            <label>Titre de Section</label>
            <input v-model="formData.about.title" />
          </div>
          <h4>Paragraphes</h4>
          <div v-for="(p, index) in formData.about.paragraphs" :key="'p'+index" class="dynamic-list-item">
            <textarea v-model="formData.about.paragraphs[index]" rows="3"></textarea>
            <button @click="formData.about.paragraphs.splice(index, 1)" class="btn-danger">Supprimer</button>
          </div>
          <button @click="formData.about.paragraphs.push('Nouveau paragraphe...')" class="btn-add">+ Ajouter un paragraphe</button>

          <h4>Statistiques (Chiffres de carrière)</h4>
          <div v-for="(stat, index) in formData.about.stats" :key="'s'+index" class="stat-row">
            <input v-model="stat.value" placeholder="Valeur (ex: 3+)" />
            <input v-model="stat.label" placeholder="Titre (ex: Années d'expérience)" />
            <button @click="formData.about.stats.splice(index, 1)" class="btn-danger">X</button>
          </div>
          <button @click="formData.about.stats.push({ value: '0', label: 'Nouvelle stat' })" class="btn-add">+ Ajouter une stat</button>
        </div>

        <!-- SECTION SKILLS -->
        <div v-if="activeTab === 'skills'" class="tab-pane">
          <h3>Section: Compétences</h3>
          <div v-for="(category, cIndex) in formData.skills.categories" :key="'c'+cIndex" class="card-edit">
            <div class="form-group">
              <label>Nom de la catégorie (ex: Frontend)</label>
              <input v-model="category.name" class="font-bold" />
            </div>
            
            <div v-for="(skill, sIndex) in category.items" :key="'sk'+sIndex" class="skill-row">
              <input v-model="skill.name" placeholder="Nom compétence" />
              <input type="number" v-model="skill.percent" placeholder="%" min="0" max="100" class="num-input"/>
              <span class="percent-label">%</span>
              <button @click="category.items.splice(sIndex, 1)" class="btn-danger btn-sm">X</button>
            </div>
            <button @click="category.items.push({ name: 'Nouvelle', percent: 50 })" class="btn-add btn-sm">+ Compétence</button>
            
            <div class="category-delete">
              <button @click="formData.skills.categories.splice(cIndex, 1)" class="btn-danger text-center">Supprimer Catégorie</button>
            </div>
          </div>
          <button @click="formData.skills.categories.push({ name: 'Nouvelle catégorie', items: [] })" class="btn-add">+ Ajouter une catégorie complète</button>
        </div>

        <!-- SECTION PROJECTS -->
        <div v-if="activeTab === 'projects'" class="tab-pane">
          <h3>Section: Projets</h3>
          <button @click="addProject" class="btn-add main-add-btn">+ CRÉER UN NOUVEAU PROJET</button>
          
          <div class="projects-list">
            <div v-for="(project, index) in formData.projects.items" :key="'pr'+index" class="card-edit project-edit">
              <h4>Projet {{ index + 1 }}</h4>
              <div class="form-group">
                <label>Titre</label>
                <input v-model="project.title" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea v-model="project.description" rows="3"></textarea>
              </div>
              <div class="form-row">
                <div class="form-group"><label>URL Image</label><input v-model="project.imageUrl" /></div>
                <div class="form-group"><label>Lien URL (Click)</label><input v-model="project.projectUrl" /></div>
              </div>
              <div class="form-group">
                <label>Tags (séparés par des virgules)</label>
                <input :value="project.tags.join(', ')" @input="e => project.tags = e.target.value.split(',').map(s=>s.trim()).filter(Boolean)" />
              </div>
              <div class="project-actions">
                <button @click="formData.projects.items.splice(index, 1)" class="btn-danger">Supprimer ce Projet</button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION CONTACT -->
        <div v-if="activeTab === 'contact'" class="tab-pane">
          <h3>Section: Contact</h3>
          <div class="form-group"><label>Titre</label><input v-model="formData.contact.title" /></div>
          <div class="form-group"><label>Sous-titre</label><input v-model="formData.contact.subtitle" /></div>
          <div class="form-group"><label>Message introductif</label><textarea v-model="formData.contact.description" rows="2"></textarea></div>
          <div class="form-group"><label>Adresse E-mail</label><input v-model="formData.contact.email" /></div>
          <div class="form-group"><label>Localisation</label><input v-model="formData.contact.location" /></div>
          <div class="form-group"><label>Téléphone</label><input v-model="formData.contact.phone" /></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import rawData from '../data/portfolio.json';

const activeTab = ref('projects');
const formData = ref(null);
const saveLabel = ref('Sauvegarder tout');
const saveStatus = ref('');

onMounted(() => {
  // Charger les données du JSON local en tant que structure mutable
  formData.value = JSON.parse(JSON.stringify(rawData));
});

const addProject = () => {
  formData.value.projects.items.unshift({
    id: Date.now(),
    title: "Nouveau Projet",
    description: "Une super description.",
    tags: ["Tech1"],
    imageUrl: "https://placehold.co/600x400/1e222a/FF66FF?text=Nouveau",
    projectUrl: "#"
  });
};

const saveData = async () => {
  saveLabel.value = "Enregistrement...";
  try {
    const response = await fetch('/api/save-json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value, null, 2)
    });
    
    if(response.ok) {
        saveLabel.value = "✓ Sauvegardé !";
        saveStatus.value = 'success';
        setTimeout(() => {
          saveLabel.value = "Sauvegarder tout";
          saveStatus.value = '';
        }, 2000);
    } else {
        throw new Error("API failed");
    }
  } catch (error) {
    console.error(error);
    saveLabel.value = "Erreur de sauvegarde";
    saveStatus.value = 'error';
    setTimeout(() => {
      saveLabel.value = "Réessayer";
      saveStatus.value = '';
    }, 3000);
  }
};
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background-color: var(--bg-color, #1A1D24);
  color: var(--text-primary, #FFF);
  font-family: 'Inter', sans-serif;
  z-index: 10000;
  position: relative;
}

.admin-header {
  padding: 1.5rem 3rem;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--neon-cyan);
}

.logo { font-size: 1.5rem; font-weight: bold; }
.logo-accent { color: var(--neon-cyan); }
.admin-badge { color: var(--neon-pink); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; border: 1px solid var(--neon-pink); padding: 2px 6px; border-radius: 4px; }

.save-btn {
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-cyan));
  border: none; padding: 10px 25px; border-radius: 5px; color: #FFF; font-weight: bold; cursor: pointer; text-transform: uppercase; transition: opacity 0.3s;
}
.save-btn:hover { opacity: 0.8; box-shadow: 0 0 15px rgba(0,255,255,0.4); }
.save-btn.saved { background: #00FF00; color: #000; box-shadow: 0 0 15px #00FF00; }
.save-btn.error { background: #FF0000; }

.admin-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  padding: 2rem 3rem;
}

.admin-sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.admin-sidebar button {
  background: rgba(255,255,255,0.05); border: 1px solid transparent; color: #CCC; padding: 15px; text-align: left; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: all 0.2s;
}
.admin-sidebar button:hover, .admin-sidebar button.active {
  background: rgba(0,255,255,0.1); border-color: var(--neon-cyan); color: #FFF;
}

.admin-content {
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
}

.tab-pane h3 { color: var(--neon-cyan); margin-bottom: 2rem; font-size: 1.8rem; }
.tab-pane h4 { color: var(--neon-pink); margin-top: 2rem; margin-bottom: 1rem; }

.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 5px; color: #BBB; font-size: 0.9rem; }
.form-group input, .form-group textarea { width: 100%; padding: 12px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 5px; color: #FFF; font-family: inherit; }
.form-group input:focus, .form-group textarea:focus { border-color: var(--neon-pink); outline: none; box-shadow: 0 0 10px rgba(255,102,255,0.2); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

.btn-add { background: transparent; border: 2px dashed var(--neon-cyan); color: var(--neon-cyan); padding: 8px 15px; border-radius: 5px; cursor: pointer; display: block; margin-top: 10px; }
.main-add-btn { width: 100%; padding: 15px; font-weight: bold; font-size: 1.1rem; margin-bottom: 2rem; text-align: center; }
.btn-add:hover { background: rgba(0,255,255,0.1); }

.btn-danger { background: transparent; border: 1px solid #FF4444; color: #FF4444; padding: 5px 12px; border-radius: 4px; cursor: pointer; }
.btn-danger:hover { background: #FF4444; color: #FFF; }

.dynamic-list-item { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; }
.dynamic-list-item textarea { flex: 1; }

.stat-row { display: grid; grid-template-columns: 1fr 2fr auto; gap: 10px; margin-bottom: 10px; }

.card-edit { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; }
.skill-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.skill-row input { flex: 1; padding: 8px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: #FFF; }
.num-input { max-width: 80px; }

.category-delete { margin-top: 1.5rem; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 1rem; text-align: right; }

.project-edit h4 { margin-top: 0; color: #FFF; }
.project-actions { text-align: right; margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; }

@media (max-width: 768px) {
  .admin-layout { grid-template-columns: 1fr; padding: 1rem; }
  .admin-sidebar { flex-direction: row; flex-wrap: wrap; }
  .form-row, .stat-row { grid-template-columns: 1fr; }
  .skill-row { flex-wrap: wrap; }
}
</style>
