<template>
    <div class="gd-container font-mono">
        <header class="fixed w-full z-10" :class="{ 'skicy': scrollTop > 500 }">
            <MainHeader />
        </header>
        <main class="pt-28">
            <slot />
        </main>
        <footer>
            <MainFooter />
        </footer>
    </div>
</template>
<script setup>
const scrollTop = ref(0);
onMounted(() => {
    window.addEventListener('scroll', function() {
        scrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
    });
})
const route = useRoute();
watch(() => route.path, (val) => {
    // console.log(route.path);
}, { immediate: true, deep: true })

</script>
<style scoped>
.gd-container { display: grid; grid-template-rows: 1fr auto; min-height: 100vh; }
.skicy{
    background-color: #0579f2;
}
</style>
