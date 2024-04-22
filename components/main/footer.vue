<script setup lang="ts">

</script>

<template>
  <div class="text-[#666666] bg-black pt-14">
    <div class="px-6 w-[70%] mx-auto">
        <div class="flex justify-between pb-14">
            <div>
                <NuxtImg src="/img/logo.png" class="h-[42px]" />
            </div>
            
            <div>
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
