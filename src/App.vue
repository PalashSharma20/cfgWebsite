<template>
  <div id="app" v-if="projects && links" :class="{ menuOpen: menuActive }">
    <Header />
    <transition name="overlay-down-full" mode="out-in">
      <router-view class="app-container" />
    </transition>
    <div class="overlay-top"></div>
    <div class="overlay-bottom"></div>
    <div class="overlay-top light"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      menuActive: false,
      projects: [],
      links: []
    };
  },
  mounted() {
    this.getProjects();
    this.getLinks();
  },
  methods: {
    getProjects() {
      fetch("/api/projects")
        .then(res => res.json())
        .then(projects => (this.projects = projects));
    },
    getLinks() {
      fetch("/api/navigation")
        .then(res => res.json())
        .then(links => (this.links = links));
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");
/*

  Core CSS

*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
.no-fouc {
  display: none;
}
a {
  text-decoration: none !important;
  color: #333;
}
body {
  font-family: "Roboto", sans-serif;
  background: #000;
  overflow-x: hidden;
}
.pace {
  pointer-events: none;
  user-select: none;
}
.pace.pace-inactive .pace-progress {
  display: none;
}
.pace .pace-progress {
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: #000;
  transform: translate3d(0, 0, 0) !important;
}
.pace .pace-progress:after {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  text-align: center;
  content: attr(data-progress-text);
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 4vmax;
  line-height: 100vh;
  color: #fffbf9;
}
#app {
  transition: 0.45s transform cubic-bezier(0.4, 0, 0.2, 1);
  background: #fbfbfb;
}
/* .menuOpen {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
} */
.designer {
  position: fixed;
  right: 0;
  top: 45%;
  line-height: 8.5vmin;
  color: #fff;
  font-weight: 700;
  font-size: 1.7vmin;
  text-transform: uppercase;
  transform: rotate(90deg) translateY(-50%);
  transform-origin: bottom center;
  z-index: 1;
  mix-blend-mode: exclusion;
  color: #999;
}
.designer a {
  color: #fbfbfb;
}
/*

  Sections

*/
.section {
  width: 100%;
  height: 100%;
  padding: 13.3vmin 8.2vmax;
  /* max-width: 1920px; */
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}
.section h1 {
  color: #343a40;
  font-size: 13.3vmin;
  letter-spacing: 0.7vmax;
  font-weight: 900;
  text-transform: uppercase;
  display: block;
}
.section h2 {
  color: #343a40;
  font-size: 8vmin;
  font-weight: 700;
  line-height: 9.3vmin;
  margin-bottom: 2.7vmin;
  display: block;
}
.section h3 {
  color: #343a40;
  font-size: 6vmin;
  font-weight: 400;
  margin-bottom: 2.7vmin;
  display: block;
}
.section h5 {
  color: #666;
  font-size: 4vmin;
  font-weight: 300;
  line-height: 6.7vmin;
  display: block;
  margin: 4vmin 0;
}
.section h6 {
  color: #333;
  font-size: 2vmin;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 4vmin;
  display: block;
}
.section p {
  color: #666;
  font-size: 2.2vmin;
  font-weight: 300;
  line-height: 4.3vmin;
  margin: 0 0 2vmin;
  display: block;
}
.section .img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.section .img h1 {
  color: #fff;
  padding: 2.7vmin;
}
.section .button {
  display: inline-block;
  padding: 1.7vmin 0;
  margin-right: 2.7vmin;
  font-size: 2.1vmin;
  color: #343a40;
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 0.27vmin solid transparent;
}
.section .button:hover {
  border-color: #343a40;
}
.section .flex {
  display: flex;
  flex-wrap: wrap;
}
.section .col {
  flex-basis: 50%;
}
.section .col.small {
  flex-basis: 35%;
}
.section .col.large {
  flex-basis: 65%;
  padding-right: 3.4vmax;
}
.section .col.large h2 {
  line-height: 10.6vmin;
  margin-top: 2.7vmin;
}
.section .col .content {
  padding: 1vmax 2vmin;
  width: 100%;
}
.section .back {
  display: flex;
  align-items: center;
  margin-bottom: 4vmin;
}
.section .back span {
  font-size: 2.1vmin;
  color: #343a40;
  text-transform: uppercase;
  margin-left: 1vmin;
}
.section .back svg {
  height: 1.5vmin;
  width: 1.5vmin;
}
.section .itenerary h3 {
  font-size: 2vmax;
  margin-bottom: 0;
}
.section .itenerary p {
  margin-bottom: 0;
}
/*

  BG

*/
.section.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  background-size: cover;
  background-position: center;
  max-width: initial;
}
.section.hero h1 {
  font-size: 12vmin;
  position: relative;
  color: #fff;
}
.section.hero h1 span {
  padding: 0 0.7vmax;
  display: inline-block;
  margin: 0.4vmin 0;
  background: var(--span-bg, #000);
}
/*

  Map

*/
.section.hero.map {
  padding: 0 !important;
}
.section.hero.map .img {
  height: 100%;
  width: 100%;
  background-image: url(/static/media/location.png);
  background-position: center;
  background-size: cover;
  margin: 0 !important;
}
.section.hero.map .info {
  position: absolute;
  width: 27.8vmax;
  bottom: -13.3vmin;
  right: 7vmin;
  background: #fff;
  z-index: 1;
  padding: 5.3vmin;
  display: flex;
  flex-direction: column;
}
.section.hero.map .footer {
  display: flex;
}
.section.hero.map .footer a {
  color: #343a40;
  display: flex;
  align-items: center;
  font-size: 2.1vmin;
  line-height: 4vmin;
}
.section.hero.map .footer a span {
  flex: 1;
  margin-left: 0.7vmax;
}
.section.hero.map .footer a svg {
  height: 2.7vmin;
  width: 2.7vmin;
  fill: #343a40;
}
/*

  Mobile

*/
@media screen and (max-width: 1020px) {
  .card-container {
    width: 33%;
  }
  .section .img-group .img {
    margin: 20px 0 !important;
    width: 100% !important;
    height: 400px !important;
  }
  .section .flex {
    flex-direction: column;
  }
  .section .col {
    width: 100% !important;
  }
  .section .col .content {
    padding: 1vmax 0 !important;
  }
  .section .col.small {
    margin-top: 20px;
  }
}
@media screen and (max-width: 860px) {
  body {
    padding-top: 64px;
  }
  .designer {
    display: none;
  }
  .header {
    background: #000;
    top: 0;
    z-index: 24 !important;
    mix-blend-mode: initial;
    height: 64px;
  }
  .header__logo {
    left: 20px;
    transform: rotate(0deg);
  }
  .header__ham {
    right: 0;
  }
  .header__links {
    padding: 0 7.5%;
  }
  .section.hero {
    height: 60vh;
  }
  .section.hero h1 {
    font-size: 50px;
  }
  .section.hero.map {
    flex-direction: column;
  }
  .section.hero.map .img {
    background-size: 200%;
  }
  .section.hero.map .info {
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
    display: block;
  }
  footer {
    min-height: auto;
    padding: 50px 0;
  }
  footer .content {
    flex-direction: column;
    padding-bottom: 20px;
  }
  footer .col {
    padding: 35px 20px;
    width: 100%;
    align-items: center;
  }
  footer .col h1,
  footer .col p,
  footer .col a {
    text-align: center;
  }
  footer .col h1 {
    font-size: 35px;
  }
  footer .col p {
    font-size: 14px;
    line-height: 30px;
  }
  footer .col a {
    font-size: 17px;
  }
  footer .copyright {
    padding: 20px;
  }
  footer .copyright span {
    text-align: center;
    font-size: 12px;
  }
  footer .social {
    width: calc(100vw - 7vmax);
    justify-content: center;
  }
  footer .social a {
    width: 90px;
    height: 90px;
    font-size: 30px;
  }
}
@media screen and (max-width: 600px) {
  .card-container {
    width: 100%;
    max-width: initial;
  }
  .section {
    padding: 50px 20px;
  }
  .section h1 {
    font-size: 30px;
    letter-spacing: 1px;
  }
  .section h5 {
    font-size: 18px;
    line-height: 35px;
  }
  .section h6 {
    font-size: 12px;
    line-height: 20px;
  }
  .section p {
    font-size: 16px;
    line-height: 30px;
  }
  .section .button {
    font-size: 16px;
    line-height: 30px;
  }
}

.overlay-bottom,
.overlay-top {
  position: fixed;
  left: 0;
  height: 0;
  width: 100vw;
  background: #ebebeb;
  transition-duration: 0.45s;
  z-index: 10000000000;
}
.overlay-top {
  top: 0;
  &.light {
    background: #000;
    transition-delay: 0.2s;
  }
}
.overlay-bottom {
  bottom: 0;
  background: #000;
}
.overlay-down-full-enter ~ .overlay-top {
  height: 100vh;
}

.overlay-down-full-enter-to ~ .overlay-bottom {
  height: 0;
}

.overlay-down-full-enter-active ~ .overlay-top,
.overlay-down-full-leave-active ~ .overlay-top {
  height: 100vh;
}

.overlay-down-full-enter-active ~ .overlay-top {
  transition-timing-function: cubic-bezier(0.48, 0, 0.12, 1);
}

.overlay-down-full-leave-active ~ .overlay-bottom {
  transition-timing-function: cubic-bezier(0.48, 0, 0.12, 1);
}

.overlay-down-full-enter-active,
.overlay-down-full-leave-active {
  transition-duration: 0.65s;
}
.overlay-down-full-enter-active ~ .overlay-top,
.overlay-down-full-enter-to ~ .overlay-top {
  display: none;
}

.overlay-down-full-enter ~ .overlay-bottom,
.overlay-down-full-enter-active ~ .overlay-bottom,
.overlay-down-full-enter-to ~ .overlay-bottom {
  transition-duration: unset !important;
  height: 100vh;
}
</style>
