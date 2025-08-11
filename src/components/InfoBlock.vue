<script setup>
import { inject } from 'vue'

defineProps({
  imageUrl: String,
  title: String,
  description: String,
})
const {closeDrawer} = inject('cart')
</script>

<template>
  <div class="text-center flex justify-center flex-col items-center">
    <img height="80" width="80" :src="imageUrl" alt="" />
	 <h2 class="text-lg font-semibold">{{ title }}</h2>
	 <p class="text-sm text-gray-500">{{ description }}</p>
   <button @click='closeDrawer()' class="mt-4 bg-lime-500 text-white py-2 px-4 rounded-xl hover:bg-lime-600 active:bg-lime-700">
	   Вернуться назад
	 </button>
	
  </div>
</template>
