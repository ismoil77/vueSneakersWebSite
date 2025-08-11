<script setup>
import DrawerHead from './DrawerHead.vue'

import CartItemList from './CartItemList.vue'
import { inject } from 'vue'
import InfoBlock from './InfoBlock.vue'
const emit = defineEmits(['createOrder'])

const {cart,orderSuccess} = inject('cart')
</script>
<template>
  <div class="w-full h-full bg-black fixed top-0 left-0 z-10 opacity-70"></div>
  <div class="w-96 h-full fixed top-0 right-0 z-20 bg-white p-8 flex flex-col ">
    <div class="flex-shrink-0">
      <DrawerHead />
    </div>
    <div class="flex-1 overflow-y-auto mt-4">
      <CartItemList />
    </div>
    <div v-if="cart.length === 0&&orderSuccess==false" class="w-[300px] proverka h-[300px] m-auto mx-auto text-center flex justify-center my-[150px]">
      <InfoBlock
        
        
        imageUrl="public/package-icon.png"
        title="Корзина пуста"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
      />
    </div>
     <div v-else-if="cart.length === 0&&orderSuccess" class="w-[300px] proverka h-[300px] m-auto mx-auto text-center flex justify-center my-[150px]">
      <InfoBlock
        
        
        imageUrl="public/order-success-icon.png"
        title="Успешно"
        description="Ваш заказ принят"
      />
    </div>
    <div v-if="cart.length > 0" class="flex flex-col gap-4 mb-5">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ cart.reduce((acc,cur)=>acc+cur.price,0) }} руб.</b>
      </div>
      <div class="flex gap-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ Math.round((cart.reduce((acc,cur)=>acc+cur.price,0))/100*5) }} руб.</b>
      </div>
    </div>
    <button 
    v-if="cart.length > 0"
    @click='()=>emit("createOrder")'
      :disabled = '!cart.length>0'
      class="transition bg-lime-500 w-full text-white py-2 px-4 rounded-xl hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300"
    >
      Оформить заказ
    </button>
  </div>
</template>
