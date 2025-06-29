<template>
  <div>
    <section
      id="home"
      class="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 text-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30"
        style="background-image: url('/placeholder-hero.jpg')"
      ></div>
      <div class="relative z-10 container mx-auto px-4">
        <h2 class="text-5xl font-extrabold mb-6 leading-tight">
          Din väg till bättre hälsa och rörelse
        </h2>
        <p class="text-xl mb-10 max-w-2xl mx-auto">
          Expertvård inom naprapati av Mattias Mauritzson Eldh, med fokus på att
          återställa funktion och minska smärta.
        </p>
        <PrimeButton
          label="Boka tid"
          severity="info"
          size="large"
          rounded
          class="font-bold py-4 px-10 text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          :pt="{
            root: 'bg-blue-500 hover:bg-blue-600 text-gray-900',
            label: 'font-bold',
          }"
          @click="
            navigateTo(
              'https://www.bokadirekt.se/places/mauritzson-naprapati-norion-bank-arena-46503',
              {
                external: true,
                open: { target: '_blank', noreferrer: true },
              }
            )
          "
        />
      </div>
    </section>

    <section id="om-oss" class="py-20 bg-gray-900 text-gray-200">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12 text-blue-400">Om Mauritzson Naprapati</h2>
        <PrimeCard class="mx-auto pa-8 shadow-xl" style="max-width: 900px;" pt:root="bg-gray-800 text-gray-200">
          <template #content>
            <div class="flex justify-center mb-8">
              <img
                src="/mattias-mauritzson-eldh.jpg"
                alt="Mattias Mauritzson Eldh, Naprapat"
                class="rounded-full w-48 h-48 object-cover border-4 border-blue-400 shadow-lg"
              />
            </div>

            <h3 class="text-3xl font-bold mb-4 text-white">Mattias Mauritzson Eldh</h3>
            <div class="max-w-prose mx-auto">
                <p class="mb-6 text-lg leading-relaxed">
                  Välkommen till Mauritzson Naprapati. Med en stark passion för att
                  hjälpa människor uppnå optimal fysisk hälsa erbjuder Mattias
                  individanpassad naprapatvård som syftar till att återställa
                  funktion och minska smärta.
                </p>
                <p class="mb-6 text-lg leading-relaxed">
                  Vår helhetsinriktade metod kombinerar avancerade manuella
                  behandlingstekniker, riktade rehabiliteringsövningar och viktig
                  patientutbildning. Denna strategi ger inte bara omedelbar
                  lindring, utan också långvariga resultat - och ger dig kunskapen
                  att bevara din hälsa över tid.
                </p>
                <p class="text-lg leading-relaxed">
                  Mattias är engagerad i att förstå just dina behov och skapar en
                  skräddarsydd behandlingsplan som går till botten med orsaken till
                  dina besvär. Upptäck en väg till bättre rörlighet, minskad smärta
                  och ökad livskvalitet.
                </p>
            </div>
          </template>
        </PrimeCard>
      </div>
    </section>

    <section id="tjanster" class="py-20 bg-gray-900 border-b border-gray-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12 text-blue-400">Tjänster</h2>
        <p class="text-xl mb-10 max-w-2xl mx-auto">
          Utforska vårt breda utbud av behandlingar och tjänster utformade för att hjälpa dig uppnå optimal hälsa och välbefinnande.
        </p>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PrimeCard
            v-for="(service, i) in allServices"
            :key="i"
            class="pa-6 shadow-lg text-left"
            pt:root="bg-gray-800 text-gray-200"
          >
            <template #title>
              <h3 class="text-2xl font-semibold mb-2 text-white">
                {{ service.title }}
              </h3>
            </template>
            <template #content>
              <p>{{ service.description }}</p>
            </template>
          </PrimeCard>
        </div>
      </div>
    </section>

    <section id="kontakt" class="py-20 bg-gray-800 text-gray-200">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12 text-blue-400">Kontakta Oss</h2>
        <p class="text-xl mb-8">Har du frågor eller vill boka en tid? Använd kontaktinformationen nedan.</p>

        <div class="flex flex-col items-center gap-12 max-w-xl mx-auto">
          <PrimeCard class="pa-8 shadow-xl text-left w-full" pt:root="bg-gray-800 text-gray-200">
            <template #title>
              <h3 class="text-2xl font-semibold mb-4 text-white">Kontaktinformation</h3>
            </template>
            <template #content>
              <div class="flex items-center mb-4">
                <i class="pi pi-phone text-blue-400 text-xl mr-3"></i>
                <div>
                  <p class="font-semibold text-white">Telefon:</p>
                  <p>+46 70-XXX XXXX</p>
                </div>
              </div>
              <div class="flex items-center mb-4">
                <i class="pi pi-envelope text-blue-400 text-xl mr-3"></i>
                <div>
                  <p class="font-semibold text-white">E-post:</p>
                  <p>mattiasmauritzson@gmail.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="pi pi-map-marker text-blue-400 text-xl mr-3"></i>
                <div>
                  <p class="font-semibold text-white">Adress:</p>
                  <p>Rinkebyvägen 20, 182 36 Danderyd, Stockholm, Sverige</p>
                </div>
              </div>
            </template>
          </PrimeCard>

          <div
            class="overflow-hidden rounded-lg shadow-xl border-2 border-gray-700 w-full"
            style="padding-bottom: 56.25%; position: relative; height: 0;"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0494432247348!2d18.069774577239247!3d59.38711467472099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f828a6f23b18f%3A0x6b77e8a93259850c!2sRinkebyv%C3%A4gen%2020%2C%20182%2036%20Danderyd%2C%20Sweden!5e0!3m2!1sen!2sse!4v1700000000000!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style="border:0; position: absolute; top: 0; left: 0;"
              :allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead, navigateTo } from "#app";

const allServices = [
  {
    title: "Naprapatbehandlingar",
    description:
      "Individanpassade behandlingar för att minska smärta och återställa funktion vid besvär i muskler och leder. Behandlingen anpassas efter din unika situation och kan inkludera både manuella tekniker och rådgivning.",
  },
  {
    title: "Friskvårdsmassage",
    description:
      "Avslappnande och förebyggande massage som minskar muskelspänningar, främjar cirkulation och bidrar till ökat välbefinnande. Perfekt som en del av din friskvård.",
  },
  {
    title: "Personlig träning",
    description:
      "Målmedveten och individanpassad träning med fokus på styrka, rörlighet och skadeprevention. För dig som vill träna säkert, effektivt och hållbart - oavsett nivå.",
  },
  {
    title: "Helhetssyn på hälsa",
    description:
      "Alla insatser utgår från en helhetssyn där behandling, träning och rådgivning kombineras för långsiktiga resultat. Du får stöd att förstå din kropp och verktyg för att själv påverka din hälsa.",
  },
];

useHead({
  title: "Mauritzson Naprapati - Din väg till bättre hälsa och rörelse",
  meta: [
    {
      name: "description",
      content:
        "Expertvård inom naprapati av Mattias Mauritzson Eldh i Danderyd, Stockholm. Specialiserad på ryggsmärta, nacksmärta, huvudvärk och idrottsskador.",
    },
  ],
});
</script>

<style scoped>
</style>