<template>
  <div class="container">
    <div class="about-us">
      <h2 class="title-section">We Are</h2>
      <div class="text-section">
        Team of like-minded people, secially active companies, Media
        personalities, volunteers who help low-income shelters and foster carers
        to support homeless animals
      </div>
      <h2 class="title-section">Our Primary Goal</h2>
      <div class="text-section">
        is to provide animals with the most necessary things - food, medicine,
        and urgent needs for the livelihood of shelters. We believe in our power
        and the power of conscious citizens who care about the environment and
        their health, who understand the importance of helping each other,
        especially our little friends. Growth begins with your care for your
        loved ones. Animals are one of the closest creatures to humans who
        remain with us throughout our lives. We all know the healing power of
        warmth, grace, and big loving eyes.
      </div>
      <blockquote class="blockquote">
        <p>"Animals need to have friends. Just like humans."</p>
        <footer>— James Herriot, All Creatures Great and Small</footer>
      </blockquote>
      <div class="text-section">
        Who else if not we should support our younger brothers, especially in
        difficult times? Let's be friends!
      </div>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/5Wk1rp99B7o?si=lin22cw7K7KgWeyV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.about-us {
  padding-block: 10%;

  .title-section {
    color: black;
    font-size: 4vw;
    font-weight: 700;
    line-height: 1.25em;
  }

  .text-section {
    color: black;
    font-size: 2.5vw;
    font-family: "DM Sans", sans-serif;
    line-height: 1.5em;
    display: block;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
}

blockquote {
  border-left: 5px solid #ff97d0;
}

.blockquote {
  border-left-width: 0.25rem;
  width: 100%;
  padding: 1rem;
  font-style: italic;
  font-weight: 400;
  color: var(--black);
  text-align: left;
  margin-left: 2rem;
  margin-bottom: 1em;
  font-size: 2.5vw;
  line-height: 1.5em;
  display: block;
}
</style>
