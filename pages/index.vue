<script setup lang="ts">
const menus = ref([
  { id: 1, label: 'About Us' },
  { id: 2, label: 'Menu' },
  { id: 3, label: 'Our Shop' },
  { id: 4, label: 'Location' },
])
</script>

<template>
  <div class="w-full h-full relative overflow-y-auto overflow-x-hidden font-['Barlow Semi Condensed']">
    <div class="relative flex items-center h-[804px] bg-[url('/images/bg.png')] z-10">
      <div class="sticky-0 fixed top-6 w-full grid place-items-center">
        <div class="flex items-center py-3.5 px-20 bg-white rounded-2xl w-[1290px] justify-between">
          <img src="/logo.svg" />

          <div class="space-x-24">
            <a v-for="menu in menus" href="#" class="text-sm uppercase font-semibold text-black">{{ menu.label }}</a>
          </div>

          <button class="px-5 justify-center bg-orange-10 py-2 rounded-full cursor-pointer active:mt-[1px]">
            <p class="text-sm text-white uppercase font-semibold">Order Now</p>
          </button>
        </div>
      </div>

      <div class="pl-[300px] max-w-[971px]">
        <p class="text-5xl text-white uppercase font-semibold leading-[55px] tracking-tight">
          Indulge in the <span class="text-orange-10">enchantment</span> of every sip.
        </p>

        <div class="space-y-6 mt-5">
          <p class="text-base text-white w-[580px]">
            Step into a world of enchantment where every sip tells a story and every moment is infused with magic. At Magic Milktea, we're more than just a cafe—we're a destination for those seeking a taste of whimsy and wonder.
          </p>

          <div class="px-5 justify-center bg-orange-10 py-2 rounded-full cursor-pointer w-32">
            <p class="text-sm text-white uppercase font-semibold">Order Now</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-28 flex items-center relative z-0">
      <img src="/icons/star.svg" class="w-72 h-72 absolute -left-16 -top-6 opacity-10 rotate-6">
      <div class="flex items-center space-x-10 mx-auto">
        <img src="/images/certified.png" alt="">

        <div class="space-y-8">
          <div class="flex items-center space-x-7">
            <p class="text-[40px] font-semibold text-black-10 uppercase tracking-tighter">About Us</p>

            <img src="/icons/star.svg" class="w-8 h-8">
          </div>

          <p class="text-black-10 text-base w-[623px] leading-7">
            Magic Milktea, where every cup holds a little bit of magic! Founded by friends Lily and Alex, our cozy cafe is a haven for specialty beverages and warm hospitality. From handcrafted teas to whimsical decor, we're here to spark joy in every sip. Join us and experience the enchantment for yourself!
          </p>

          <p class="text-2xl text-orange-10 font-semibold">Read our story</p>
        </div>
      </div>
    </div>
  </div>
</template>
