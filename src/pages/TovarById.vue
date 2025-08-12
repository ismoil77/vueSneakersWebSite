<template>
  <div class="w-4/5 m-auto bg-white rounded-3xl transition duration-300 ease-in-out shadow-xl mt-14 p-8 flex flex-col text-center font-bold hover:shadow-2xl">
	<div v-if='openEdit' class="">
		<EditModal :aboutProduct="aboutProduct" :openEdit="openEdit"/>
	</div>
   <h1 class='text-[40px]'>Кроссовки</h1>
	 <img class="animate-pulse transition-all duration-300 ease-in-out w-[300px] mx-auto object-cover  h-64" :src="aboutProduct.imageUrl" alt="Sneaker" />
	  <h1 class="text-[30px]">Товар с ID: {{ id }}</h1>
	 <p>Название: {{ aboutProduct.title }}</p>
	 <p>Цена: {{ aboutProduct.price }} руб.</p>
	 <button class="bg-blue-500 text-white px-4 py-2 rounded w-full" @click='() => openEdit = true'>EDIT</button>
	 <router-link to="/"><button class="bg-red-500 text-white px-4 py-2 rounded w-full" @click='() => deleteUser()'>DELETE</button></router-link>
  </div>
</template>

<script setup>
import EditModal from '@/components/EditModal.vue'
import axios from 'axios'
import { inject, onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const aboutProduct = ref({})
const openEdit = ref(false)
const {fetchItems} = inject('cart')

async function  getProduct() {
	try {
		const {data} = await axios.get(`https://d89145fa87ccacd1.mokky.dev/items/${id}`)
		console.log(data);
		aboutProduct.value = data
	} catch (error) {
		console.error(error);
		
	}

}

async function  deleteUser() {
	try {
		await axios.delete(`https://d89145fa87ccacd1.mokky.dev/items/${id}`)
		fetchItems()
	} catch (error) {
		console.error(error);
	}
}

onMounted(()=>{
	getProduct()
})
provide('edit', {
  openEdit,
  getProduct
})
</script>