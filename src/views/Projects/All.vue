<template>
  <div v-if="$parent.projects">
    <div class="section" style="padding-bottom: 0px;">
      <h1>our projects</h1>
      <h5>As a service, Coding for Good has undertaken numerous different projects, ranging from websites to apps. Below, you may read more about each project and view the finished result.</h5>
    </div>
    <div class="card-group">
      <div v-for="(project, id) in $parent.projects" :key="id" class="card-container">
        <router-link :to="`/projects/${id}`" class="card">
          <div
            v-if="project.img"
            class="card-img"
            :style="{backgroundImage: `url(${project.img})`}"
          ></div>
          <div class="card-content">
            <h5 class="card-title">{{ project.title }}</h5>
            <p
              class="card-text"
            >{{ project.desc[0].split(' ').slice(0, (project.img ? 10 : 40)).join(' ') }}...</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProjects"
};
</script>

<style lang="scss" scoped>
.card-group {
  width: 97.5%;
  margin: 0 auto;
  padding-bottom: 50px;
}
.card-container {
  width: 25%;
  max-width: 400px;
  height: 450px;
  display: inline-block;
}
.card {
  display: block;
  height: 90%;
  width: 90%;
  margin: 5%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  transition: 0.3s all cubic-bezier(0.02, 0.01, 0.47, 1);
  overflow: hidden;
  border-top: 3px solid #343a40;
}
.card:hover {
  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
  transform: translate(0, -20px);
}
.card-content {
  padding: 20px;
  margin-top: 20px;
}
.card-img + .card-content {
  margin-top: 0;
}
.card-title {
  color: #343a40;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.card-text {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  line-height: 30px;
}
.card-btn {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  padding-right: 25px;
  background-image: url(https://www.shareicon.net/data/128x128/2015/10/08/114094_forward_512x512.png);
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
}
.card-img {
  height: 250px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
