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
import ImgArrow from "../assets/images/6273a272fe3407579aa3d6c9_PngItem_344959.png";

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

  .collection-item__ward {
    background-color: white;
    flex: none;
    align-self: stretch;
    width: 31%;

    .project-link-wrap {
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      height: 100%;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      display: flex;

      .wards-wrap {
        border: 0.25em solid #000;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 2em;
        display: flex;

        .ward-name {
          color: black;
          text-align: center;
          margin-bottom: 0;
          font-family: Droid Sans, sans-serif;
          font-size: 1.5vw;
          line-height: 1.25em;
        }
      }
    }
  }
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
