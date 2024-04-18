<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const menus = ref([
  { id: 1, label: 'About Us' },
  { id: 2, label: 'Menu' },
  { id: 3, label: 'Our Shop' },
  { id: 4, label: 'Location' },
])

const bestSellersItems = [
  {
    label: 'Milkteas',
    isSelected: true,
  },
  {
    label: 'Coffees',
    isSelected: false,
  },
  {
    label: 'Sweet Treats',
    isSelected: false,
  },
  {
    label: 'Savour Delights',
    isSelected: false,
  },
]

const milkteas = [
  { label: 'Enchanted Earl Grey Milk Tea', price: '$4.50', image: '/images/milkteas/mk1.png'},
  { label: 'Fairy forest matcha latte', price: '$5.00', image: '/images/milkteas/mk2.png'},
  { label: 'Unicorn Dream Strawberry milk Tea', price: '$5.00', image: '/images/milkteas/mk3.png'},
  { label: 'Enchanted Lavender honey milk tea', price: '$5.00', image: '/images/milkteas/mk4.png'},
  { label: 'cosmic blueberry cream milk tea', price: '$5.00', image: '/images/milkteas/mk5.png'},
]

const coffees = [
  { label: 'Americano Mestiso de Asukal', price: '$4.50', image: '/images/coffees/c1.png'},
  { label: 'Espresso Ilocano De Mucho', price: '$5.00', image: '/images/coffees/c2.png'},
  { label: 'Latte la Creamy Laste De Choco Mucho', price: '$5.00', image: '/images/coffees/c3.png'},
  { label: 'Flat White Enchanted Mustard', price: '$5.00', image: '/images/coffees/c4.png'},
  { label: 'Don Macchiato and Donya', price: '$5.00', image: '/images/coffees/c5.png'},
]
</script>

<template>
  <div class="w-full h-full relative overflow-y-auto overflow-x-hidden">
    <div class="relative flex items-center h-[804px] bg-[url('/images/bg.png')] z-10">
      <div class="sticky-0 fixed top-6 w-full grid place-items-center">
        <div class="flex items-center py-3.5 px-20 bg-white rounded-2xl w-[1290px] justify-between shadow-md">
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
        <p class="text-5xl text-white uppercase font-bold leading-[55px] tracking-tight">
          Indulge in the <span class="text-orange-10">enchantment</span> of every sip.
        </p>

        <div class="space-y-6 mt-5">
          <p class="text-base text-white w-[580px] font-medium">
            Step into a world of enchantment where every sip tells a story and every moment is infused with magic. At Magic Milktea, we're more than just a cafe—we're a destination for those seeking a taste of whimsy and wonder.
          </p>

          <div class="px-5 text-center bg-orange-10 py-2 rounded-full cursor-pointer w-32">
            <p class="text-sm text-white uppercase font-semibold">Order Now</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-28 flex items-center relative z-0">
      <img src="/icons/star.svg" class="w-72 h-72 absolute -left-16 -top-6 opacity-10 rotate-6">

      <img src="/icons/star.svg" class="w-12 h-12 absolute left-56 top-10 opacity-10">

      <img src="/icons/outlineStar.svg" class="w-96 h-96 absolute -bottom-20 -right-16">

      <div class="flex items-center space-x-10 mx-auto">
        <img src="/images/certified.png" alt="">

        <div class="space-y-8">
          <div class="flex items-center space-x-7">
            <p class="text-[40px] font-bold text-black-10 uppercase tracking-tighter">About Us</p>

            <img src="/icons/star.svg" class="w-8 h-8">
          </div>

          <p class="text-black-10 text-base w-[623px] leading-7">
            Magic Milktea, where every cup holds a little bit of magic! Founded by friends Lily and Alex, our cozy cafe is a haven for specialty beverages and warm hospitality. From handcrafted teas to whimsical decor, we're here to spark joy in every sip. Join us and experience the enchantment for yourself!
          </p>

          <p class="text-2xl text-orange-10 font-semibold">Read our story</p>
        </div>
      </div>
    </div>

    <div class="w-full py-28 grid place-items-center relative z-0">
      <div class="flex items-center space-x-4">
        <p class="text-[40px] text-black-10 font-bold uppercase">Our Best Sellers</p>
        <img src="/icons/star.svg" class="w-10 h-10">
      </div>

      <div class="mt-20 space-y-16 w-full grid place-items-center">
        <div class="relative w-full grid place-items-center">
          <TabGroup>
            <TabList class="flex items-center space-x-24 absolute top-0 mx-auto">
              <Tab
                v-for="item in bestSellersItems"
                as="template"
                v-slot="{ selected }"
              >
                <button class="space-y-4 w-full flex flex-col items-center group ring-offset-0 focus:outline-none focus:ring-0">
                  <p class="text-sm text-black font-bold uppercase whitespace-nowrap">{{ item.label }}</p>
                  <div 
                    class="w-20 h-2 bg-orange-10 rounded-full group-hover:visible group-hover:opacity-50" 
                    :class="[
                      selected ? 'visible' : 'invisible'
                    ]"
                  />
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-24">
              <TabPanel>
                <ItemsSellers :items="milkteas" />
              </TabPanel>

              <TabPanel>
                <ItemsSellers :items="coffees" />
              </TabPanel>

              <TabPanel>
                <ItemsSellers :items="milkteas" />
              </TabPanel>

              <TabPanel>
                <Milkteas :items="coffees" />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

        <p class="text-2xl font-semibold text-orange-10 cursor-pointer">View Full Menu</p>
      </div>
    </div>

    <div class="w-full py-28 grid place-items-center relative z-0">
      <div class="flex flex-col items-start">
        <div class="flex flex-col items-start space-y-10">
          <div class="flex items-center space-x-4">
            <p class="text-[40px] text-black-10 font-bold uppercase">Enchanting Atmosphere</p>
            <img src="/icons/star.svg" class="w-10 h-10">
          </div>

          <p class="w-[1000px] text-lg text-black-10">
            But Magic Milktea is more than just a place to enjoy great drinks—it's a community, a gathering spot where friends old and new come together to share laughter, stories, and moments of joy. Whether you're studying for exams, catching up with colleagues, or simply seeking solace in a quiet corner, you'll always find a warm welcome and a friendly smile here.
          </p>
        </div>

        <div class="flex items-center space-x-7 mt-16">
          <div class="space-y-7">
            <img src="/images/atmosphere/imageA1.png" class="rounded-lg">
            <img src="/images/atmosphere/imageA2.png" class="rounded-lg">
          </div>

          <img src="/images/atmosphere/imageB.png" class="rounded-lg">

          <div class="space-y-7">
            <img src="/images/atmosphere/imageC1.png" class="rounded-lg">
            <img src="/images/atmosphere/imageC2.png" class="rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
