<template>
  <div class="section bg-yellow">
    <div class="container">
      <div id="help" class="container-group">
        <SectionGroup :datas="weHelp" />
      </div>
      <div class="collection-list__wrap">
        <CollectionListItem :datas="collectionListWrap" />
      </div>
      <div class="link">
        <a href="#" class="apply-link-wrap">Apply For Help</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import CollectionListItem from "./main/CollectionListItem.vue";
import SectionGroup from "./main/SectionGroup.vue";

const weHelp = [
  {
    title: "We want to help",
    desc: "Homeless packs, volunteers, guardians, overstayers, shelters and other organisations",
  },
];

const collectionListWrap = [
  "Shelter of victoria bulbyna",
  "City of faithful hearts",
  "Shelter of natalia tymoshenko",
  "Shelter of jeanne Sass",
  "Shelter of victoria Bondarenko",
  "Sterilization center",
  "Zoo change",
  "Save Lives",
  "City center for the treatment of animals",
  "Society for the protection of animals in sumy",
  "The right to life",
  "4 paws",
  "The kingdom of cars",
  "Zvir",
  "Mercy",
  "Happy Dog",
  "Give me a paw, Friend",
  "Friend",
  "Hope",
  "We are for the right to life",
  "Planeta",
  "Second Life",
  "Happy shore",
  "Retrieverteam",
  "Shelter of irina Dobrolyubova",
  "Matilda",
  "Life",
  "Second change",
  "Sos",
  "Best Friends",
];
</script>

<style lang="scss">
.bg-yellow {
  background-color: #fcf944;
}
.collection-list__wrap {
  grid-column-gap: 3.5%;
  grid-row-gap: 3em;
  flex-flow: wrap;
  place-content: stretch flex-start;
  align-items: stretch;
  display: flex;
}

.link {
  margin-top: 10%;
}

.apply-link-wrap {
  border: 0.25em solid black;
  background-color: #ff97d0;
  padding: 1rem 2rem;
  margin-top: 40px;
  text-decoration: none;
  font-weight: 700;
}
</style>
