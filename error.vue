<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center">
    <div class="p-8 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-xl">
      <h1 class="text-6xl font-extrabold text-blue-400 mb-4">
        {{ error?.statusCode || 'Error' }}
      </h1>
      <h2 class="text-3xl font-bold mb-6">
        {{ error?.statusCode === 404 ? 'Sidan kunde inte hittas' : 'Något gick fel!' }}
      </h2>
      <p class="text-xl mb-8">
        {{ error?.statusCode === 404 ? 'Vi kunde inte hitta sidan du letade efter.' : 'Vi beklagar, ett oväntat fel uppstod.' }}
      </p>
      <PrimeButton
        label="Gå till startsidan"
        severity="info"
        size="large"
        rounded
        class="font-bold py-3 px-8 text-lg"
        @click="handleClearError"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useError } from '#app';
import PrimeButton from 'primevue/button'; 

const error = useError();

const handleClearError = () => {
  clearError({ redirect: '/' });
};

useHead({
  title: `${error.value?.statusCode || 'Okänt'} - Fel uppstod`,
  meta: [
    { name: 'description', content: `Sidan kunde inte hittas eller ett fel uppstod (${error.value?.statusCode || 'okänt'}).` }
  ]
});
</script>

<style scoped>
</style>