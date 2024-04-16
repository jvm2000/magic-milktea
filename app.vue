<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Magic Milktea` : 'Magic Milktea'
  },
  link: [{ rel: 'icon', type: "image/x-icon", href: '/icons/favicon.png' }]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>