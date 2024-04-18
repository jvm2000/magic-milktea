<script setup lang="ts">

type Item = {
  image: string | null
  label: string | null
  price: string | null
}

const props = defineProps<{
  items: Item,
}>()
</script>

<template>
  <div class="flex items-center space-x-6">
    <div v-for="item in props.items" class="w-[245.76px] rounded-lg overflow-hidden relative">
      <img :src="item?.image" alt="" class="w-[245.76px] h-[247.68px] object-fill">

      <div class="px-4 py-4 relative space-y-4 bg-orange-10 border border-orange-10">
        <p class="text-white font-bold text-xl capitalize">{{ item?.label }}</p>

        <div class="justify-between flex items-center">
          <span class="text-2xl font-medium text-white">{{ item?.price }}</span>

          <button class="bg-white px-4 py-2 rounded-full justify-center">
            <p class="text-orange-10 font-semibold text-[16px]">Order Now</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>