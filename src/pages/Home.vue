<script setup>
import axios from 'axios'
import CardList from '@/components/CardList.vue'
import { inject } from 'vue'
import debounce from 'lodash.debounce'

const { addToCart, cart, filters, items, openModal } = inject('cart')

const handleChange = debounce((e) => {
  filters.sortBy = e.target.value
},200)

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const { data } = await axios.post(
        'https://95f58d0711e02b4b.mokky.dev/favorites',
        { item_id: item.id ,item}
      )
      item.isFavorite = true
      item.favoriteId = data.id
    } else {
      await axios.delete(
        `https://95f58d0711e02b4b.mokky.dev/favorites/${item.favoriteId}`
      )
      item.isFavorite = false
      item.favoriteId = null
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>
    <button class='bg-lime-500 text-white px-4 py-2 rounded' @click='openModal = true'>Добавить новые кроссовки</button>
    
    <div class="flex gap-4">
      <select
        @change="handleChange"
        class="border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        <option value="title">По названию</option>
        <option value="price">По цене (дешёвые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
      <div class="relative">
        <img
          src="/search.svg"
          alt="Search Icon"
          class="absolute left-3 top-3 w-5 h-5"
        />
        <input
          v-model="filters.searchQuery"
          type="search"
          placeholder="Поиск..."
          class="border border-slate-300 rounded-xl px-10 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>
    </div>
  </div>

  <div class="mt-10">
    <CardList
      :items="items"
      @addToFavorite="addToFavorite"
      @addToCart="addToCart"
		:buttonVisible='true'
    />
  </div>
</template>
