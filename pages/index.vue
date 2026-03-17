<template>
  <div>

    <!-- ═══════════════════════════════════════
         HERO
    ═══════════════════════════════════════ -->
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <!-- Bakgrundsbild med overlay -->
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/mattias-mauritzson-eldh.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40"></div>

      <!-- Decorativ linje vänster -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40"></div>

      <div class="relative z-10 container mx-auto px-6 py-32">
        <div class="max-w-2xl">
          <!-- Tagline -->
          <p class="text-xs tracking-[0.3em] text-primary uppercase font-medium mb-6 flex items-center gap-3">
            <span class="inline-block w-8 h-px bg-primary"></span>
            Naprapat i Danderyd · Stockholm
          </p>

          <!-- Rubrik -->
          <h1 class="section-title text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white">
            Ont i ryggen,<br>
            <span class="text-primary">nacken</span><br>
            eller axlarna?
          </h1>

          <p class="text-lg md:text-xl text-gray-300 mb-4 max-w-xl leading-relaxed">
            Mattias Mauritzson Eldh hjälper dig tillbaka till ett smärtfritt, aktivt liv — med individanpassad naprapati, massage och personlig träning.
          </p>

          <!-- Social proof -->
          <div class="flex items-center gap-2 mb-10">
            <div class="flex">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
            </div>
            <p class="text-gray-300 text-sm">Högt betyg av nöjda patienter</p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <button
              class="cta-btn font-bold py-4 px-10 text-base rounded-full tracking-wide uppercase"
              @click="navigateTo('https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503', { external: true, open: { target: '_blank', noreferrer: true } })"
            >
              Boka din tid nu →
            </button>
            <a
              href="#om-oss"
              class="inline-flex items-center gap-2 py-4 px-8 rounded-full border border-gray-600 hover:border-primary text-gray-300 hover:text-primary transition-all duration-300 text-base font-medium"
            >
              Läs om Mattias
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll-indikator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <i class="pi pi-angle-down text-xl"></i>
      </div>
    </section>


    <!-- ═══════════════════════════════════════
         TRUST BAR — siffror
    ═══════════════════════════════════════ -->
    <section class="py-12 bg-gray-950 border-y border-gray-800/60">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-16 text-center">
          <div v-for="stat in stats" :key="stat.label" class="group">
            <p class="text-4xl font-bold text-primary mb-1 section-title">{{ stat.value }}</p>
            <p class="text-xs tracking-widest text-gray-400 uppercase">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════
         OM MIG
    ═══════════════════════════════════════ -->
    <section id="om-oss" class="py-24 bg-background">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <!-- Bild -->
          <div class="relative">
            <div class="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
            <img
              src="/mattias-mauritzson-eldh.jpg"
              alt="Mattias Mauritzson Eldh, Naprapat"
              class="relative w-full max-w-sm mx-auto rounded-2xl object-cover shadow-2xl border border-gray-800"
              style="aspect-ratio: 3/4; object-fit: cover;"
            />
            <!-- Badge -->
            <div class="absolute -bottom-4 -right-4 md:-right-8 bg-primary text-gray-900 rounded-2xl px-5 py-3 shadow-xl">
              <p class="text-xs font-bold uppercase tracking-wider">Legitimerad</p>
              <p class="text-sm font-bold">Naprapat</p>
            </div>
          </div>

          <!-- Text -->
          <div>
            <p class="text-xs tracking-[0.3em] text-primary uppercase font-medium mb-4 flex items-center gap-3">
              <span class="inline-block w-8 h-px bg-primary"></span>
              Om mig
            </p>
            <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Mattias<br>Mauritzson Eldh
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Välkommen till Mauritzson Naprapati. Jag är legitimerad naprapat sedan 2022 och har en stark passion för att hjälpa människor uppnå optimal fysisk hälsa genom individanpassad vård som syftar till att återställa funktion och minska smärta.
              </p>
              <p>
                Min helhetsinriktade metod kombinerar avancerade manuella behandlingstekniker, riktade rehabiliteringsövningar och patientutbildning — vilket ger inte bara omedelbar lindring, utan också långvariga resultat.
              </p>
              <p>
                Jag är engagerad i att förstå just dina behov och skapar en skräddarsydd behandlingsplan som går till botten med orsaken till dina besvär.
              </p>
            </div>

            <!-- Värden -->
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div v-for="value in values" :key="value" class="flex items-center gap-2 text-sm text-gray-300">
                <i class="pi pi-check-circle text-primary text-xs"></i>
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════
         TJÄNSTER
    ═══════════════════════════════════════ -->
    <section id="tjanster" class="py-24 bg-gray-950">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] text-primary uppercase font-medium mb-4 flex items-center justify-center gap-3">
            <span class="inline-block w-8 h-px bg-primary"></span>
            Vad jag erbjuder
            <span class="inline-block w-8 h-px bg-primary"></span>
          </p>
          <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-4">Tjänster</h2>
          <p class="text-gray-400 max-w-xl mx-auto">
            Behandlingar utformade för att hjälpa dig uppnå optimal hälsa och välbefinnande — skräddarsydda efter dina behov.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(service, i) in allServices"
            :key="i"
            class="service-card group relative bg-surface border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-400 overflow-hidden"
          >
            <!-- Hover-glow -->
            <div class="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"></div>

            <div class="relative">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <i :class="`pi ${service.icon} text-primary text-xl`"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ service.description }}</p>
              <a
                href="https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503"
                target="_blank"
                rel="noreferrer"
                class="text-primary text-sm font-semibold hover:text-white transition-colors duration-300 flex items-center gap-1 group/link"
              >
                Boka denna tjänst
                <i class="pi pi-arrow-right text-xs transition-transform duration-300 group-hover/link:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════
         RECENSIONER
    ═══════════════════════════════════════ -->
    <section id="recensioner" class="py-24 bg-background">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] text-primary uppercase font-medium mb-4 flex items-center justify-center gap-3">
            <span class="inline-block w-8 h-px bg-primary"></span>
            Patienternas röst
            <span class="inline-block w-8 h-px bg-primary"></span>
          </p>
          <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-4">Vad säger patienterna?</h2>
          <div class="flex items-center justify-center gap-2 mt-3">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-xl">★</span>
            <span class="text-gray-400 text-sm ml-2">Toppbetyg</span>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(review, i) in reviews"
            :key="i"
            class="bg-surface border border-gray-800 rounded-2xl p-7 flex flex-col hover:border-gray-700 transition-colors duration-300"
          >
            <div class="flex mb-4">
              <span v-for="j in 5" :key="j" class="text-yellow-400">★</span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed italic flex-grow">"{{ review.text }}"</p>
            <div class="mt-6 pt-5 border-t border-gray-800 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                {{ review.name[0] }}
              </div>
              <div>
                <p class="text-white text-sm font-semibold">{{ review.name }}</p>
                <p class="text-gray-500 text-xs">{{ review.treatment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════
         KONTAKT
    ═══════════════════════════════════════ -->
    <section id="kontakt" class="py-24 bg-gray-950">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-xs tracking-[0.3em] text-primary uppercase font-medium mb-4 flex items-center justify-center gap-3">
            <span class="inline-block w-8 h-px bg-primary"></span>
            Kom i kontakt
            <span class="inline-block w-8 h-px bg-primary"></span>
          </p>
          <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-4">Hitta hit</h2>
          <p class="text-gray-400 max-w-md mx-auto">Frågor? Hör gärna av dig direkt, eller boka tid via BokaDirekt.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Kontaktinfo -->
          <div class="space-y-4">
            <div
              v-for="contact in contactInfo"
              :key="contact.label"
              class="bg-surface border border-gray-800 rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition-colors duration-300"
            >
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <i :class="`pi ${contact.icon} text-primary text-lg`"></i>
              </div>
              <div>
                <p class="text-xs tracking-widest text-gray-500 uppercase mb-1">{{ contact.label }}</p>
                <p class="text-white font-medium">{{ contact.value }}</p>
              </div>
            </div>

            <!-- Boka-knapp -->
            <button
              class="cta-btn w-full font-bold py-4 px-8 text-base rounded-2xl tracking-wide uppercase mt-2"
              @click="navigateTo('https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503', { external: true, open: { target: '_blank', noreferrer: true } })"
            >
              Boka din tid nu →
            </button>
          </div>

          <!-- Karta -->
          <div class="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl" style="min-height: 380px; position: relative;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0494432247348!2d18.069774577239247!3d59.38711467472099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f828a6f23b18f%3A0x6b77e8a93259850c!2sRinkebyv%C3%A4gen%2020%2C%20182%2036%20Danderyd%2C%20Sweden!5e0!3m2!1sen!2sse!4v1700000000000!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style="border:0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              :allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useHead, navigateTo } from '#app';

const stats = [
  { value: '2022', label: 'Legitimerad naprapat' },
  { value: '100%', label: 'Individanpassat' },
  { value: '3', label: 'Tjänsteområden' },
];

const values = [
  'Legitimerad naprapat',
  'Helhetssyn på kroppen',
  'Skräddarsydd behandling',
  'Långsiktiga resultat',
];

const allServices = [
  {
    icon: 'pi-heart',
    title: 'Naprapatbehandlingar',
    description:
      'Individanpassade behandlingar för att minska smärta och återställa funktion vid besvär i muskler och leder. Anpassas efter din unika situation med manuella tekniker och rådgivning.',
  },
  {
    icon: 'pi-refresh',
    title: 'Friskvårdsmassage',
    description:
      'Avslappnande och förebyggande massage som minskar muskelspänningar, främjar cirkulation och bidrar till ökat välbefinnande. Perfekt som en del av din friskvård.',
  },
  {
    icon: 'pi-bolt',
    title: 'Personlig träning',
    description:
      'Målmedveten och individanpassad träning med fokus på styrka, rörlighet och skadeprevention. För dig som vill träna säkert, effektivt och hållbart — oavsett nivå.',
  },
  {
    icon: 'pi-star',
    title: 'Helhetssyn på hälsa',
    description:
      'Behandling, träning och rådgivning kombineras för långsiktiga resultat. Du får stöd att förstå din kropp och verktyg för att själv påverka din hälsa positivt.',
  },
];

const reviews = [
  {
    text: 'Informativ, vänlig och duktig.',
    name: 'Christina O.',
    treatment: 'BokaDirekt-recension',
  },
  {
    text: 'Min nackspärr försvann. Tack!',
    name: 'Johan L.',
    treatment: 'BokaDirekt-recension',
  },
  {
    text: 'Mycket bra massage och tips på övningar.',
    name: 'Jenny G.',
    treatment: 'BokaDirekt-recension',
  },
];

const contactInfo = [
  { icon: 'pi-phone', label: 'Telefon', value: '070-952 53 09' },
  { icon: 'pi-envelope', label: 'E-post', value: 'mattiasmauritzson@gmail.com' },
  { icon: 'pi-map-marker', label: 'Adress', value: 'Rinkebyvägen 20, 182 36 Danderyd' },
  { icon: 'pi-clock', label: 'Öppettider', value: 'Mån–Fre 07:00–19:00 · Lör–Sön 08:00–12:00' },
];

useHead({
  title: 'Mauritzson Naprapati – Naprapat i Danderyd, Stockholm',
  meta: [
    {
      name: 'description',
      content:
        'Individanpassad naprapatvård av Mattias Mauritzson Eldh i Danderyd, Stockholm. Specialiserad på ryggsmärta, nacksmärta, axelbesvär och idrottsskador.',
    },
  ],
});
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}
</style>
