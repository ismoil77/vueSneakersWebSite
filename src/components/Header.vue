<script setup>
const props = defineProps({
  totalPrice: Number,
})
const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img class="w-10" src="/logo.png" alt="" />
        <div class="">
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div></router-link
    >
    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"
      >
        <img src="/cart.svg" alt="" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/">
        <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
          <span>Главная</span>
        </li>
      </router-link>
      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
          <img src="/heart.svg" alt="" />
          <span>Закладки</span>
        </li>
      </router-link>
      <router-link to="/orderPages">
        <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/cart.svg" alt="" />
        <span>Заказы</span>
      </li></router-link>
      <router-link to="/profile"> <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/profile.svg" alt="" />
        <span>Профиль</span>
      </li></router-link>
    </ul>
  </header>
</template>
