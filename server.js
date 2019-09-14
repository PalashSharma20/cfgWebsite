const express = require("express"),
  path = require("path"),
  serveStatic = require("serve-static"),
  axios = require("axios"),
  app = express(),
  apiURL = "https://script.google.com/macros/s/AKfycbya_27E6WDYsyy6DeGoPFdDod2VUzfsWaruZyVmI19lHUnyO1I/exec?q="

app.use(express.static(__dirname + "/dist/"))
app.get("/api/projects", (req, res) => {
  axios
    .get(`${apiURL}projects`)
    .then(response => {
      res.json(response.data)
    })
})

app.get("/api/navigation", (req, res) => {
  axios
    .get(`${apiURL}navigation`)
    .then(response => {
      res.json(response.data)
    })
})

app.get("/r/:slug", (req, res) => {
  let slug = req.params.slug.toLowerCase()
  slug = slug.replace(/l|1/gi, "i")
  slug = slug.replace(/0/gi, "o")
  axios
    .get(`${apiURL}redirects`)
    .then(response => {
      let redirects = response.data
      if (redirects.hasOwnProperty(slug)) {
        let link = redirects[slug]
        res.redirect(link)
      } else {
        res.redirect("/")
      }
    })
})

app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/dist/index.html")
})

app.listen(process.env.PORT || 8000)
