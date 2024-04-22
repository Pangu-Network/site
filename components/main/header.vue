<script setup>
const navigation = [
  { name: 'How it works', href: '/' },
  { name: 'Investors', href: '/'},
  { name: 'Ecosystem', href: '/'},
  { name: 'Docs', href: '/'},
  { name: 'Axe Testnet Live', href: '/', ico: true}
]

const route = useRoute()
const isOpen = ref(false)

const path = computed(() => route.fullPath)

</script>

<template>
    <div class="bg-[#111111] h-24 flex justify-between items-center">
        <div class="flex items-center px-1 xl:ml-64 md:ml-16 ml-4">
            <img src="/img/logo.png" alt="Logo" class="h-[42px]">
        </div>

        <!-- 导航菜单 -->
        <nav class="hidden md:flex 2xl:mr-48 md:mr-16">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="['hover:text-gray-300 md:text-lg text-base flex items-center 2xl:px-6 xl:px-4 md:px-2', { 'active': path === item.href }]" :aria-current="path === item.href ? 'page' : undefined">
                {{ item.name }}
                <NuxtImg v-if="item.ico" class="w-11 inline-block ml-2" src="/img/beta.png"/>     
            </NuxtLink>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button @click="isOpen = !isOpen" class="md:hidden mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- 移动端菜单 -->
        <div v-if="isOpen" class="absolute top-full left-0 w-full bg-[#111111] z-10 md:hidden">
            <a href="#" class="block p-4 border-b border-white hover:bg-[#222222]">首页</a>
            <a href="#" class="block p-4 border-b border-white hover:bg-[#222222]">产品</a>
            <a href="#" class="block p-4 border-b border-white hover:bg-[#222222]">关于我们</a>
            <a href="#" class="block p-4 hover:bg-blue-600">联系我们</a>
        </div>
    </div>
</template>

