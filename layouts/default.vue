<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-sans">
    <header class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-40">
      <div class="container mx-auto flex justify-between items-center relative">
        <h1 class="text-3xl font-bold text-blue-400">Mauritzson Naprapati</h1>

        <button
          @click="toggleMenu"
          class="sm:hidden bg-gray-700 text-blue-400 hover:bg-gray-600 hover:text-blue-300 focus:outline-none z-40 p-2 rounded-md"
          aria-label="Toggle navigation"
        >
          <i :class="isMenuOpen ? 'pi pi-times text-2xl' : 'pi pi-bars text-2xl'"></i>
        </button>

        <nav class="hidden sm:block">
          <ul class="flex space-x-4 text-lg items-center">
            <li><NuxtLink to="/#home" class="hover:text-blue-400 transition duration-300">Hem</NuxtLink></li>
            <li><NuxtLink to="/#om-oss" class="hover:text-blue-400 transition duration-300">Om oss</NuxtLink></li>
            <li><NuxtLink to="/#tjanster" class="hover:text-blue-400 transition duration-300">Tjänster</NuxtLink></li>
            <li><NuxtLink to="/#kontakt" class="hover:text-blue-400 transition duration-300">Kontakt</NuxtLink></li>
            <li>
              <NuxtLink
                to="https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503"
                target="_blank"
                rel="noreferrer"
                class="hover:text-blue-400 transition duration-300 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
              >
                Boka
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <transition name="fade-slide">
          <nav
            v-if="isMenuOpen"
            class="fixed inset-0 bg-gray-950 z-[9999] flex flex-col items-center justify-center sm:hidden"
          >
            <ul class="flex flex-col space-y-8 text-2xl">
              <li><NuxtLink to="/#home" class="hover:text-blue-400 transition duration-300" @click="closeMenu">Hem</NuxtLink></li>
              <li><NuxtLink to="/#om-oss" class="hover:text-blue-400 transition duration-300" @click="closeMenu">Om oss</NuxtLink></li>
              <li><NuxtLink to="/#tjanster" class="hover:text-blue-400 transition duration-300" @click="closeMenu">Tjänster</NuxtLink></li>
              <li><NuxtLink to="/#kontakt" class="hover:text-blue-400 transition duration-300" @click="closeMenu">Kontakt</NuxtLink></li>
              <li>
                <NuxtLink
                  to="https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503"
                  target="_blank"
                  rel="noreferrer"
                  class="hover:text-blue-400 transition duration-300 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                  @click="closeMenu"
                >
                  Boka
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </header>

    <main class="flex-grow pt-16">
      <slot />
    </main>

    <footer class="bg-gray-800 text-gray-400 p-6 text-center text-sm border-t border-gray-700">
      <div class="container mx-auto">
        <p>
          © {{ new Date().getFullYear() }} Mauritzson Naprapati. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, nextTick } from 'vue';
import { useHead } from '#app';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

async function closeMenu() {
  isMenuOpen.value = false; 

  await nextTick();

  if (process.client) { 
    document.body.classList.remove('overflow-hidden');
    document.body.style.overflow = ''; 
  }

  setTimeout(() => {
    if (process.client && document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
        document.body.style.overflow = '';
    }
  }, 100);
}

watchEffect(() => {
  const newClass = isMenuOpen.value ? 'overflow-hidden' : '';
  useHead({
    bodyAttrs: {
      class: newClass
    }
  });
});
</script>

<style>
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
html {
  scroll-behavior: smooth; 
}
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); 
}
</style>