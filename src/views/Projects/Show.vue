<template>
  <div class="section" v-if="project">
    <router-link class="back" to="/projects">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 404.258 404.258"
        style="enable-background:new 0 0 404.258 404.258;"
        xml:space="preserve"
      >
        <polygon
          points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "
        />
      </svg>
      <span>All Projects</span>
    </router-link>
    <h1>{{ project.title }}</h1>
    <div
      v-if="project.img"
      class="img"
      :style="{backgroundImage: `url(${project.img} )`, backgroundSize: 'contain'}"
    ></div>
    <h5 style="font-weight:500;text-transform:uppercase;">Client: {{ project.client }}</h5>
    <p v-for="(para, i) in project.desc" :key="i">{{ para }}</p>
    <a
      v-if="project.url"
      class="button no_pace"
      target="_BLANK"
      :href="project.url"
    >VIEW {{ project.title }}</a>
  </div>
</template>

<script>
export default {
  name: "AllProjects",
  computed: {
    project() {
      return this.$parent.projects[this.$route.params.id];
    }
  }
};
</script>

<style>
.img {
  height: 400px;
}
</style>
