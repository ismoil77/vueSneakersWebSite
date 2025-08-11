<script setup>
import { inject } from 'vue'

const {closeDrawer} = inject('cart')
</script>

<template>
	 <div class="flex items-center gap-5 mb-5">

      <svg @click='closeDrawer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="cursor-pointer opacity-30 rotate-180 hover:opacity-100 transition-all duration-300 hover:-translate-x-1">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      
      
    <h2 class='text-2xl font-bold'>Корзина</h2>

    </div>
</template>