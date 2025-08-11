<template>
	<h2 class="text-3xl font-bold mb-8" v-auto-animate>Мой профиль</h2>
	<div class="flex flex-col gap-[20px]">
		<div class="border-2 border-gray-300 p-[20px] rounded">
			<h3 class="text-2xl font-bold mb-4">Личная информация</h3>
			<p>Имя: <span class="font-semibold">Иван</span></p>
			<p>Фамилия: <span class="font-semibold">Иванов</span></p>
			<p>Email: <span class="font-semibold">ivanov@example.com</span></p>
		</div>
		<div class="border-2 border-gray-300 p-[20px] rounded">
			<h3 class="text-2xl font-bold mb-4">Адрес доставки</h3>
			<p>Город: <span class="font-semibold">Москва</span></p>
			<p>Улица: <span class="font-semibold">Ленина</span></p>
			<p>Дом: <span class="font-semibold">10</span></p>
		</div>
	</div>
</template>