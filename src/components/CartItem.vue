<script setup>
const emit = defineEmits(['onClickRemove'])

let props = defineProps({
  item:Object,
  title:String,
  price:Number,
  imageUrl:String
})




</script>





<template>
  <div class="flex items-center border border-slate-200 rounded-xl p-4 gap-4">
    <img :src="imageUrl" alt="sneakers" class="w-16 h-16 object-cover" />
    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }} руб.</b>

        <img
          @click='emit("onClickRemove")'
          class="opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
          src="/close.svg"
          width="20"
          height="20"
          alt="close"
        />
      </div>
    </div>
  </div>
</template>
