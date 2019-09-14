import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import About from "./views/About"
import Hackathon from "./views/Hackathon"
import All from "./views/Projects/All"
import Show from "./views/Projects/Show"
import NotFound from "./views/NotFound"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/hackathon",
      name: "Hackathon",
      component: Hackathon
    },
    {
      path: "/projects",
      name: "Projects",
      component: All
    },
    {
      path: "/projects/:id",
      name: "ShowProject",
      component: Show
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
})
