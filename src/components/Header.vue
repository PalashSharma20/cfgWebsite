<template>
  <div>
    <header class="header">
      <div @click="$parent.menuActive = !$parent.menuActive" class="header__ham">
        <div class="header__ham-container">
          <span class="header__ham-bar"></span>
          <span class="header__ham-bar"></span>
          <span class="header__ham-bar"></span>
          <span class="header__ham-bar"></span>
        </div>
      </div>
      <router-link
        class="header__logo"
        @click.native="$parent.menuActive = false"
        to="/"
      >Coding For Good</router-link>
    </header>
    <nav class="header__nav">
      <div class="header__links">
        <router-link
          :class="['header__links-item', '-Home', { s:  $route.name === 'Home' }]"
          @click.native="$parent.menuActive = false"
          to="/"
        >Home</router-link>
        <router-link
          :class="['header__links-item', '-About', { s:  $route.name === 'About' }]"
          @click.native="$parent.menuActive = false"
          to="/about"
        >About Us</router-link>
        <router-link
          :class="['header__links-item', '-Projects', { s:  $route.name === 'Projects' }]"
          @click.native="$parent.menuActive = false"
          to="/projects"
        >Projects</router-link>
        <a
          v-for="(link, i) in links('external')"
          :key="i"
          :class="['header__links-item', `-${link.title}`]"
          :href="link.url"
        >{{ link.title }}</a>
        <router-link
          v-for="(link, i) in links('internal')"
          :key="i"
          :class="['header__links-item', `-${link.title}`, { s:  $route.name === link.title }]"
          @click.native="$parent.menuActive = false"
          :to="link.url"
        >{{ link.title }}</router-link>
      </div>
    </nav>
    <div class="designer">
      * Designed by
      <a class="no_pace" href="https://palashsharma.com" target="_BLANK">Palash Sharma</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    links(type) {
      return this.$parent.links.filter(link =>
        type == "internal" ? !link.external : link.external
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 40px;
  width: 100%;
  left: 0;
  z-index: 24;
  mix-blend-mode: exclusion;
}
.header__ham {
  width: 64px;
  height: 64px;
  padding: 19.5px;
  transform: rotate(0);
  transition: 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
  position: fixed;
  right: 50px;
  cursor: pointer;
}
.header__ham-container {
  position: relative;
  width: 25px;
  height: 25px;
  transform: rotate(0);
  transition: 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.header__ham-bar {
  position: absolute;
  height: 2px;
  width: 100%;
  background: #fff;
  opacity: 1;
  left: 0;
  transform: rotate(0);
  transition: 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.header__ham-bar:nth-child(1) {
  top: 0;
}
.header__ham-bar:nth-child(2),
.header__ham-bar:nth-child(3) {
  top: 10px;
}
.header__ham-bar:nth-child(4) {
  top: 20px;
  width: 60%;
  right: 0;
  left: initial;
}
body:not(.menuOpen) .header__ham:hover .header__ham-bar:nth-child(4) {
  width: 100%;
}
.menuOpen .header__ham-bar:nth-child(1),
.menuOpen .header__ham-bar:nth-child(4) {
  top: 18px;
  width: 0 !important;
  left: 50%;
}
.menuOpen .header__ham-bar:nth-child(2) {
  transform: rotate(45deg);
}
.menuOpen .header__ham-bar:nth-child(3) {
  transform: rotate(-45deg);
}
.header__logo {
  position: absolute;
  left: 40px;
  top: 0;
  line-height: 64px;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transform-origin: bottom center;
}
.header__nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: -100%;
  background-color: #000;
  transition: top 0.75s cubic-bezier(0.48, 0, 0.12, 1) 0.3s;
  z-index: 23;
  overflow: hidden;
}
.menuOpen .header__nav {
  top: 0;
}
.header__links {
  height: 100%;
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.header__links-item {
  text-decoration: none;
  display: block;
  color: #ccc;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.3vmax;
  text-align: left;
  font-size: 4vmax;
  margin: 1.3vmax 0;
  cursor: pointer;
}
.header__links-item:hover {
  color: #999;
}
.header__links-item.s {
  background-color: #fffbf9;
  color: #000;
}
.header__links-item.projects {
  pointer-events: initial !important;
}
</style>
