<script setup>
import axios from 'axios'
import { inject, onMounted, ref } from 'vue'

const newProduct = ref({
  title: '',
  price: 0,
  imageUrl: '',
})
const { openModal, fetchItems } = inject('cart')
const addProduct = async (e) => {
  e.preventDefault()
  console.log(newProduct.value);
  try {
    await axios.post('https://d89145fa87ccacd1.mokky.dev/items', newProduct.value)
    closeModal()
    fetchItems()
  } catch (error) {
    console.error(error);
  }
}

const closeModal = () => {
  openModal.value = false
}

const allImages = ref([])
onMounted(() => {
  allImage()
})
const allImage = () => {
  for (let i = 1; i <= 12; i++) {
    allImages.value.push(`/sneakers/sneakers-${i}.jpg`)
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg p-6 w-96">
      <h2 class="text-xl font-bold mb-4">Добавить товар</h2>
      <form @submit="addProduct">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="title">Название</label>
          <input
            class="border border-gray-300 rounded-lg p-2 w-full"
            type="text"
            id="title"
            v-model="newProduct.title"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="price">Цена</label>
          <input
            class="border border-gray-300 rounded-lg p-2 w-full"
            type="number"
            id="price"
            v-model="newProduct.price"
            required
          />
        </div>
        <div class="mb-4"></div>
        <div class=""></div>
        <div class="mb-4 flex flex-wrap gap-2 h-[130px] overflow-y-scroll">
          <div v-for="(img, index) in allImages" :key="index">
            <img
              class="w-[100px] opacity-70 hover:opacity-100 hover:border-2 transition active:border-green-500"
              @click="
                () => {
                  newProduct.imageUrl = img;
                  
                }
              "
              :src="img"
              alt=""
            />
            <p>image {{ index + 1 }}</p>
          </div>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit" >
          Добавить
        </button>
       
      </form>
       <button class="bg-red-500 text-white px-4 py-2 rounded w-full mt-2" @click="closeModal">
          Отмена
        </button>
    </div>
  </div>
</template>
