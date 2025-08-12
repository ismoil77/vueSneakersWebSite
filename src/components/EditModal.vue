<script setup>
import axios from 'axios'
import { inject, provide, ref } from 'vue'
const allImages = ref([])
const { openEdit,getProduct } = inject('edit')
const { fetchItems } = inject('cart')

const props = defineProps({
  aboutProduct: Object,
})
const editedProduct = ref({
  title: '',
  price: 0,
  imageUrl: '',
})
const allImage = () => {
  for (let i = 1; i <= 12; i++) {
    allImages.value.push(`/sneakers/sneakers-${i}.jpg`)
  }
}
allImage()
editedProduct.value = { ...props.aboutProduct }
const editProduct = async (e) => {
  e.preventDefault()
  try {
    console.log(props.aboutProduct.id)
    await axios.patch(
      `https://d89145fa87ccacd1.mokky.dev/items/${props.aboutProduct.id}`,
      editedProduct.value,
    )
	 getProduct()
	 fetchItems()
    openEdit.value = false
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full">
    <div class="bg-white rounded-lg p-6 w-96">
      <h2 class="text-xl font-bold mb-4">Редактировать товар</h2>
      <form @submit="editProduct">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="title">Название</label>
          <input
            class="border border-gray-300 rounded-lg p-2 w-full"
            type="text"
            id="title"
            placeholder="Введите название"
            v-model="editedProduct.title"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="price">Цена</label>
          <input
            class="border border-gray-300 rounded-lg p-2 w-full"
            type="number"
            id="price"
            v-model="editedProduct.price"
            required
          />
        </div>
        <div class="mb-4"></div>
        <div class=""></div>
        <div class="mb-4 flex flex-wrap gap-2 h-[130px] overflow-y-scroll">
          <div v-for="(img, index) in allImages" :key="index">
            <img
              v-if="editedProduct.imageUrl === img"
              class="w-[100px] opacity-100 border-2 transition border-green-500"
              @click="
                () => {
                  editedProduct.imageUrl = img
                }
              "
              :src="img"
              alt=""	
            />
            <img
              v-if="editedProduct.imageUrl != img"
              class="w-[100px] opacity-70 hover:opacity-100 hover:border-2 transition active:border-green-500"
              @click="
                () => {
                  editedProduct.imageUrl = img
                }
              "
              :src="img"
              alt=""
            />
            <p>image {{ index + 1 }}</p>
          </div>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit">
          Изменить
        </button>
      </form>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
        @click="() => (openEdit = false)"
      >
        Отмена
      </button>
    </div>
  </div>
</template>
