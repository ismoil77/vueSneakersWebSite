<script setup>
import axios from 'axios'
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'
import AddModal from './components/AddModal.vue'

const items = ref([])
const cart = ref([])
const drawerOpen = ref(false)
const orderSuccess = ref(false)
const openModal = ref(false)
const totalPrice = computed(() => cart.value.reduce((acc, cur) => acc + cur.price, 0))

const filters = reactive({
  sortBy: '',
  searchQuery: '',
})

const closeDrawer = () => {
  drawerOpen.value = false
  orderSuccess.value = false
}
const openDrawer = () => (drawerOpen.value = true)

const addToCart = (item) => {
  if (!item.isAdded) {
    cart.value.push(item)
    item.isAdded = true
  } else {
    cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
    item.isAdded = false
  }
}

const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
  item.isAdded = false
}

const createOrder = async () => {
  try {
    await axios.post('https://76575b489ec41c5c.mokky.dev/orders', {
      items: cart.value,
      totalPrice: totalPrice.value,
    })
    orderSuccess.value = true
    cart.value = []
    items.value.forEach((item) => (item.isAdded = false))
    // closeDrawer()
  } catch (error) {
    console.error(error)
  }
}

watch(cart, () => localStorage.setItem('cart', JSON.stringify(cart.value)), { deep: true })

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://95f58d0711e02b4b.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((fav) => fav.item_id === item.id)
      return favorite ? { ...item, isFavorite: true, favoriteId: favorite.id } : item
    })
  } catch (error) {
    console.error(error)
  }
}

const fetchItems = async () => {
  try {
    const params = {}
    if (filters.sortBy) params.sortBy = filters.sortBy
    if (filters.searchQuery) params.title = `*${filters.searchQuery}*`

    const { data } = await axios.get('https://d89145fa87ccacd1.mokky.dev/items', { params })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: cart.value.some((c) => c.id === obj.id),
    }))
    await fetchFavorites()
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  cart.value = JSON.parse(localStorage.getItem('cart')) || []
  await fetchItems()
})

watch(filters, fetchItems, { deep: true })

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  removeFromCart,
  addToCart,
  filters,
  items,
  fetchFavorites,
  fetchItems,
  orderSuccess,
  openModal
})

</script>

<template>
  <Drawer v-if="drawerOpen" @createOrder="createOrder" />
  <div class="w-4/5 m-auto bg-white rounded-3xl shadow-xl mt-14">
    <Header @openDrawer="openDrawer" :totalPrice="totalPrice" />
    <div v-if="openModal" class="">
      <AddModal />
    </div>
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>
