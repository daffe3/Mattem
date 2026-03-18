<template>
  <div class="min-h-screen flex flex-col bg-background text-accent font-sans">
    <header
      :class="[
        'fixed top-0 left-0 w-full z-40 transition-all duration-500',
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50' : 'bg-transparent'
      ]"
    >
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <NuxtLink to="/#home" class="flex flex-col leading-none group">
          <span class="text-xl font-bold tracking-wide text-white group-hover:text-primary transition-colors duration-300">MAURITZSON</span>
          <span class="text-xs tracking-[0.25em] text-primary uppercase">Naprapati</span>
        </NuxtLink>

        <button
          @click="toggleMenu"
          class="sm:hidden text-primary hover:text-white focus:outline-none z-50 p-2"
          aria-label="Toggle navigation"
        >
          <i :class="isMenuOpen ? 'pi pi-times text-2xl' : 'pi pi-bars text-2xl'"></i>
        </button>

        <nav class="hidden sm:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm tracking-wider text-gray-300 hover:text-primary transition-colors duration-300 uppercase font-medium"
          >
            {{ link.label }}
          </a>
          <NuxtLink
            to="https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503"
            target="_blank"
            rel="noreferrer"
            class="cta-btn text-sm font-bold tracking-wider uppercase px-6 py-2.5 rounded-full"
          >
            Boka tid →
          </NuxtLink>
        </nav>
      </div>
    </header>

    <transition name="fade-slide">
      <nav
        v-if="isMenuOpen"
        class="fixed inset-0 bg-gray-950/98 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center sm:hidden"
      >
        <button
          @click="closeMenu"
          class="absolute top-6 right-6 text-primary text-3xl focus:outline-none"
        >
          <i class="pi pi-times"></i>
        </button>
        <ul class="flex flex-col space-y-8 text-center">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="text-2xl font-bold tracking-widest text-gray-200 hover:text-primary transition-colors duration-300 uppercase"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <NuxtLink
              to="https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503"
              target="_blank"
              rel="noreferrer"
              class="cta-btn inline-block text-lg font-bold tracking-wider uppercase px-8 py-3 rounded-full"
              @click="closeMenu"
            >
              Boka tid →
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <p class="text-xl font-bold tracking-wide text-white mb-1">MAURITZSON</p>
            <p class="text-xs tracking-[0.25em] text-primary uppercase mb-4">Naprapati</p>
            <p class="text-gray-400 text-sm leading-relaxed">
              Individanpassad naprapatvård i Danderyd, Stockholm. Fokus på att återställa funktion och minska smärta långsiktigt.
            </p>
          </div>

          <div>
            <p class="text-sm font-bold tracking-widest uppercase text-primary mb-4">Snabblänkar</p>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.href">
                <NuxtLink :to="link.href" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-bold tracking-widest uppercase text-primary mb-4">Kontakt</p>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-center gap-2">
                <i class="pi pi-phone text-primary text-xs"></i>
                <span>070-952 53 09</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="pi pi-envelope text-primary text-xs"></i>
                <span>mattiasmauritzson@gmail.com</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="pi pi-map-marker text-primary text-xs mt-1"></i>
                <span>Rinkebyvägen 20, 182 36 Danderyd</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {{ new Date().getFullYear() }} Mauritzson Naprapati. Alla rättigheter förbehållna.</p>
          <p>Legitimerad naprapat · Danderyds Sjukhus-område, Stockholm</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect, nextTick } from 'vue';
import { useHead } from '#app';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
  { href: '/#home', label: 'Hem' },
  { href: '/#om-oss', label: 'Om mig' },
  { href: '/#tjanster', label: 'Tjänster' },
  { href: '/#recensioner', label: 'Recensioner' },
  { href: '/#kontakt', label: 'Kontakt' },
];

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

async function closeMenu() {
  isMenuOpen.value = false;
  await nextTick();
  if (process.client) {
    document.body.style.overflow = '';
    document.body.classList.remove('overflow-hidden');
  }
}

watchEffect(() => {
  useHead({
    bodyAttrs: { class: isMenuOpen.value ? 'overflow-hidden' : '' }
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --color-primary: #87CEEB;
  --color-primary-dark: #5ab5df;
  --color-cta: #e8a020;
  --color-cta-hover: #d4901a;
  --color-bg: #111214;
  --color-surface: #1c1e21;
  --color-border: rgba(255,255,255,0.07);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'DM Sans', sans-serif;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-btn {
  background: linear-gradient(135deg, #e8a020, #d4901a);
  color: #111;
  box-shadow: 0 4px 20px rgba(232, 160, 32, 0.35);
  transition: all 0.3s ease;
}
.cta-btn:hover {
  background: linear-gradient(135deg, #f0b030, #e8a020);
  box-shadow: 0 6px 28px rgba(232, 160, 32, 0.55);
  transform: translateY(-1px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}
</style>
