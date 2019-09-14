const express = require("express"),
  path = require("path"),
  serveStatic = require("serve-static"),
  axios = require("axios"),
  app = express()

app.use(express.static(__dirname + "/dist/"))
app.get("/api/projects", (req, res) => {
  axios
    .get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=E1icTPJPDXCJsOPTKHSK_0SdD-DQ7CfI0zQUa_9PAuigOz9BMmmbpZUwUK3cq4I1caNyqq1mt7EnRzMGwRU6D6RjcKkXWw1_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJK4DgJ2qkfav5JQj27i5FfvFF4kxUm2jiUROOUi_SO2e9Gfj4XcOcBxtIS9z7MUuHSTNzgsg0p2&lib=MlwJGesRDLu0emjvioR11_UAcCTvbymtO"
    )
    .then(response => {
      res.json(response.data)
    })
})

app.get("/api/navigation", (req, res) => {
  axios
    .get(
      "https://script.google.com/macros/s/AKfycbyOnO96tGv8nXvOIm_hKiNQuZLN9MOERTVyErHuKEEsQlqg62rA/exec"
    )
    .then(response => {
      res.json(response.data)
    })
})

app.get("/r/:slug", (req, res) => {
  let slug = req.params.slug.toLowerCase()
  slug = slug.replace(/l|1/gi, "i")
  slug = slug.replace(/0/gi, "o")
  axios
    .get(
      "https://script.googleusercontent.com/a/macros/gapps.uwcsea.edu.sg/echo?user_content_key=aWZp93wMEFHE6Bccgzq6gLMC8YIpKzmHBURKIFMKcd9D5muufYTYya1sJBFXHiZkRxRfLxL54AZRyH-wuWRA97L0sRtKaPNam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_StuBjDkqQbpszVJ6zcgjIqsj8M9u6L951cil_mb0KAfj34JUSsFmg71SPAMQ86hYJT5ipBPDd02qSMVFpCGZcnkcxqYmvo18idz7_SmP3scYZpTak_o22Q&lib=M3bH7WLZ10PFHvkV50St0CEAcCTvbymtO"
    )
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

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html")
})

app.listen(process.env.PORT || 8000, () => {
  console.log("Listening")
})
