<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
  buttonVisible: Boolean,
})
</script>

<template>
  <div
    class="relative mt-10 border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
  >
    <img
      v-if="buttonVisible"
      @click="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
    />
    <img :src="imageUrl" alt="Sneaker" />
    <div v-if="buttonVisible" class="">
      <router-link :to="`/tovar/${id}`">
        <p class="mt-2">{{ title }}</p>
      </router-link>
    </div>
 <div v-if="!buttonVisible" class="">
      
        <p class="mt-2">{{ title }}</p>
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>
      <img
        v-if="buttonVisible"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="plus"
      />
    </div>
  </div>
</template>
