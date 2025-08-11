<script setup>
import CardList from '@/components/CardList.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const favorites = ref([])




onMounted(async()=>{
try {
	const {data} = await axios.get('https://95f58d0711e02b4b.mokky.dev/favorites')
	favorites.value = data.map(obj=>obj.item)
} catch (error) {
	console.error(error);
	
}
})
</script>

<template>
<div class="">
	<h2 class="text-3xl font-bold mb-8" v-auto-animate>Мои закладки</h2>
	 <CardList
      :items="favorites"
    :buttonVisible='false'
    />
	
</div>
</template>