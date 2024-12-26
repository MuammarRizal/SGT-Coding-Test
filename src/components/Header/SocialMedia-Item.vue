<script setup>
// Buat komponen terpisah untuk SocialMediaItem
defineProps({
  link: String,
  img: String,
  alt: String,
});
</script>

<template>
  <div class="social-media__item">
    <a :href="link" class="social-media__link">
      <img :src="img" :alt="alt" />
    </a>
  </div>
</template>
