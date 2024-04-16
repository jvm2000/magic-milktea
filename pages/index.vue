<script setup lang="ts">
const menus = ref([
  { id: 1, label: 'About Us' },
  { id: 2, label: 'Menu' },
  { id: 3, label: 'Our Shop' },
  { id: 4, label: 'Location' },
])
</script>

<template>
  <div class="w-full h-full relative overflow-y-auto overflow-x-hidden">
    <div class="relative flex items-center h-[804px] bg-[url('/images/bg.png')]">
      <div class="sticky-0 fixed top-6 w-full grid place-items-center">
        <div class="flex items-center py-3.5 px-20 bg-white rounded-2xl w-[1290px] justify-between">
          <img src="/logo.svg" />

          <div class="space-x-24">
            <a v-for="menu in menus" href="#" class="text-sm uppercase font-semibold text-black">{{ menu.label }}</a>
          </div>

          <div class="px-5 justify-center bg-orange-10 py-2 rounded-full">
            <p class="text-sm text-white uppercase font-semibold">Order Now</p>
          </div>
        </div>
      </div>

      <div class="pl-[300px]">
        <p class="text-5xl font-barlow text-white uppercase">
          Indulge in the <span class="text-orange-10">enchantment</span> of every sip.
        </p>
      </div>
    </div>
  </div>
</template>
