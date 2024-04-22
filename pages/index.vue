<template>
    <section>
        <HomeBanner/>
        <HomeHowItWorks/>
        <HomeOurInvestors/>
    </section>
</template>

<script setup lang="ts">

// 设置SEO
useHead({
    titleTemplate: (productCategory: any) => {
        const baseTitle = "pangu network";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
    },
});

</script>

<style scoped lang="scss">
</style>
