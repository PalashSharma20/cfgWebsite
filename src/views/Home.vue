<template>
  <div>
    <div class="section hero" style="background-image:url(/static/media/home.jpeg)">
      <h1 style="--span-bg:transparent;mix-blend-mode: exclusion;">
        <span>WE ARE</span>
        <br />
        <span>CODING FOR</span>
        <br />
        <span>GOOD</span>
      </h1>
    </div>
    <div class="section">
      <div class="flex">
        <div class="col large">
          <h6>Our Goal</h6>
          <h2>Coding For Good aims to help others through the use of digital code.</h2>
        </div>
        <div class="col small">
          <p>Whether you need a website for your GC or an app for your service, Coding For Good will help you every step of the way.</p>
          <p>Started in 2017 by UWCSEA East High School Physics teacher David Kann and a small handful of students, Coding for Good has evolved into a group of more than 15 students, still with the same goal in mind.</p>
        </div>
      </div>
      <div class="img-grid">
        <div class="img-row">
          <iframe
            style="overflow: hidden;"
            frameborder="0"
            class="img"
            src="https://www.youtube.com/embed/Uhos8w7Q0iI?controls=0"
            allow="autoplay; encrypted-media"
            scrolling="no"
          ></iframe>
        </div>
        <div class="img-row half">
          <div class="img" style="background-image:url(/static/media/2.JPG)"></div>
          <div class="img" style="background-image:url(/static/media/3.JPG)"></div>
        </div>
        <div class="img-row">
          <div class="img" style="background-image:url(/static/media/DSC_7226.JPG)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.img-grid {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-row-gap: 20px;
  .img-row {
    height: 500px;
    &.half {
      height: 700px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
    }
    .img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>