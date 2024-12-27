<script setup>
import YoutubeIcon from "../../assets/images/6274433d06989d76edcff015_9055867_youtube_bxl.svg";
import InstagramIcon from "../../assets/images/6274449bf840c377311f2e08_9055851_instagram_bxl.svg";
import FacebookIcon from "../../assets/images/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg";
import PatreonIcon from "../../assets/images/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg";
import TelegramIcon from "../../assets/images/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg";
const socialMediaLink = [
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Youtube Icon",
    img: YoutubeIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Instagram Icon",
    img: InstagramIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Facebook",
    img: FacebookIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Patreon Icon",
    img: PatreonIcon,
  },
  {
    link: "https://www.youtube.com/watch?v=IcwWlVLwZEU&list=RDNhULehoFrls&index=12",
    alt: "Telegram Icon",
    img: TelegramIcon,
  },
];
</script>

<template>
  <div
    class="social-media__item"
    v-for="(medsos, index) in socialMediaLink"
    :key="index"
  >
    <a :href="medsos.link" class="social-media__link">
      <img :src="medsos.img" :alt="medsos.alt" />
    </a>
  </div>
</template>
