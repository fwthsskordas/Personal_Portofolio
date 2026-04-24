<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  loading.value = true
  error.value = ''

  try {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    sent.value = true
  } catch (err) {
    error.value = 'Κάτι πήγε στραβά. Δοκίμασε ξανά.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="contact-section">
    <div class="left">
      <p class="section-label">// get in touch</p>
      <h2 class="section-title">Contact</h2>
      <div class="section-line"></div>
      <p class="section-desc">
        Είμαι διαθέσιμος για freelance projects και συνεργασίες.
        Στείλε μου μήνυμα και θα επικοινωνήσω μαζί σου το συντομότερο.
      </p>
      <div class="contact-links">
        <a href="mailto:your@email.com" class="contact-link">
          <span class="num">01.</span> your@email.com
        </a>
        <a href="https://github.com/fwthsskordas" target="_blank" class="contact-link">
          <span class="num">02.</span> github.com/fwthsskordas
        </a>
        <a href="https://www.linkedin.com/in/φώτης-σκορδάς-99b119226/" target="_blank" class="contact-link">
          <span class="num">03.</span> linkedin
        </a>
      </div>
    </div>

    <div class="right">
      <form class="form" @submit.prevent="handleSubmit" v-if="!sent">
        <div class="field">
          <label>// name</label>
          <input v-model="form.name" type="text" placeholder="Fotis Skordas" required />
        </div>
        <div class="field">
          <label>// email</label>
          <input v-model="form.email" type="email" placeholder="your@email.com" required />
        </div>
        <div class="field">
          <label>// message</label>
          <textarea v-model="form.message" rows="5" placeholder="Γεια σου Fotis..." required></textarea>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="loading">Sending...</span>
          <span v-else>Send message <span class="arrow">→</span></span>
        </button>
      </form>

      <div class="success" v-else>
        <span class="success-icon">✓</span>
        <p>Το μήνυμα στάλθηκε!</p>
        <button @click="sent = false" class="reset-btn">Νέο μήνυμα</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 100vh;
  background: #0d1117;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 120px 5vw 80px;
  font-family: 'Courier New', monospace;
}

.section-label {
  font-size: 13px;
  color: #1D9E75;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 500;
  color: #e8edf3;
  margin-bottom: 16px;
}

.section-line {
  width: 40px;
  height: 1px;
  background: #1D9E75;
  opacity: 0.5;
  margin-bottom: 24px;
}

.section-desc {
  font-size: 14px;
  color: #7a8694;
  line-height: 1.8;
  font-family: sans-serif;
  max-width: 400px;
  margin-bottom: 32px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-link {
  font-size: 13px;
  color: #7a8694;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #1D9E75;
}

.contact-link .num {
  color: #1D9E75;
  margin-right: 8px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 11px;
  color: #1D9E75;
  letter-spacing: 0.1em;
}

.field input,
.field textarea {
  background: #111820;
  border: 1px solid rgba(29,158,117,0.2);
  border-radius: 6px;
  padding: 10px 14px;
  color: #e8edf3;
  font-size: 13px;
  font-family: 'Courier New', monospace;
  outline: none;
  transition: border-color 0.2s;
  resize: none;
}

.field input:focus,
.field textarea:focus {
  border-color: rgba(29,158,117,0.6);
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(122,134,148,0.4);
}

.submit-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(29,158,117,0.4);
  color: #1D9E75;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  letter-spacing: 0.08em;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  align-self: flex-start;
}

.submit-btn:hover {
  background: rgba(29,158,117,0.1);
  border-color: #1D9E75;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow {
  transition: transform 0.2s;
}

.submit-btn:hover .arrow {
  transform: translateX(4px);
}

.error {
  font-size: 12px;
  color: #e24b4a;
  letter-spacing: 0.04em;
}

.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px;
  border: 1px solid rgba(29,158,117,0.2);
  border-radius: 10px;
  background: #111820;
}

.success-icon {
  font-size: 2rem;
  color: #1D9E75;
}

.success p {
  color: #e8edf3;
  font-size: 15px;
  letter-spacing: 0.06em;
}

.reset-btn {
  background: transparent;
  border: 1px solid rgba(29,158,117,0.3);
  color: #7a8694;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.reset-btn:hover {
  color: #1D9E75;
  border-color: #1D9E75;
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    padding: 100px 2rem 60px;
  }
}
</style>