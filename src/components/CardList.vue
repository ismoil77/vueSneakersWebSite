<script setup>
import Card from './Card.vue'
defineProps({
  items:Array,
  buttonVisible:Boolean,
})
const emit = defineEmits(['addToFavorites','addToCart'])
</script>

<template>
  <div class="grid grid-cols-4 gap-5 " v-auto-animate>
    <Card
    v-for="(item) in items"
    :key='item.id'
      :title="item.title"
      :price="item.price"
      :imageUrl="item.imageUrl?item.imageUrl:'https://img.freepik.com/free-vector/floral-404-error-background_23-2147768652.jpg'"
      :is-added="item.isAdded"
      :is-favorite="item.isFavorite||false"
      :onClickFavorite="()=>emit('addToFavorite',item)"
      :onClickAdd = "()=>emit('addToCart',item)"
      :buttonVisible = "buttonVisible"
    />
  </div>
</template>
