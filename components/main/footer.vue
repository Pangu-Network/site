<script setup lang="ts">

</script>

<template>
  <div class="text-[#666666] bg-black pt-14">
    <div class="px-6 md:w-[70%] w-[90%] mx-auto">
        <div class="grid md:grid-cols-3 grid-cols-1">
            <div class="md:pb-14 pb-4">
                <NuxtImg src="/img/logo.png" class="h-[42px]" />
            </div>
            <div></div>
            <div class="flex justify-end md:pb-14 pb-4"">
                <Icon name="ri:twitter-x-line" size="22" class="text-slate-200 cursor-pointer mx-2 hover:text-white" />
                <Icon name="simple-icons:discord" size="22" class="text-slate-200 cursor-pointer mx-2 hover:text-white" />
                <Icon name="file-icons:telegram" size="22" class="text-slate-200 cursor-pointer mx-2 hover:text-white" />
                <Icon name="file-icons:telegram" size="22" class="text-slate-200 cursor-pointer mx-2 hover:text-white" />
            </div>
        </div>

        <div class="border-t border-gray-800 py-8 text-sm">
            © Copyleft 2024, No rights reserved
        </div>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
