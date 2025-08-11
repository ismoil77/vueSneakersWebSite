<script setup>
import CardList from '@/components/CardList.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const orders = ref([])
const idDropDown = ref(null)
const actionDropDown = ref(false)

const openDropDown = (id) => {
  idDropDown.value = id
  if(idDropDown.value === id && actionDropDown.value) {
	 actionDropDown.value = false
	 return
  }
  actionDropDown.value = !actionDropDown.value
  console.log(idDropDown.value)
}

onMounted(async () => {
  let { data } = await axios.get('https://76575b489ec41c5c.mokky.dev/orders')
  console.log(data)
  orders.value = data
})
</script>

<template>
	<h2 class="text-3xl font-bold mb-8" v-auto-animate>Мои заказы</h2>
  <div class='flex flex-col gap-[20px]'>
<div v-for="order in orders" :key="order.id" >
  <button class="w-[100%] border-2 border-green-300 text-start text-2xl font-bold p-[20px] rounded" @click="openDropDown(order.id)">
    Заказ №{{ order.id }} и сумма заказа {{ order.totalPrice }} рублей 
	 <span class="">
		<img :src='actionDropDown ? "public/arrow-right.svg" : "public/arrow-next.svg"' alt="">
	 </span>
  </button>

  <div v-if="order.id === idDropDown && actionDropDown">
	<h1 class='text-2xl font-bold text-center my-[20px]'>Оформлен и готов к отправке</h1>
    <CardList :items="order.items" :buttonVisible="false" />
  </div>
</div>
  </div>
</template>
