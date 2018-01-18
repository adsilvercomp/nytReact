const path = require("path");
const router = require("express").Router();
// const db = require("../models");

const articleFunction = {
    getArticles: function (req, res) {

        axios.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                "api-key": "ded0f4e6c7134d81ac76e8c881189fe1",
                "q": topic,
                "begin_date": beginDate,
                "end_date": endDate
            },
        }.then(function (res) {
            console.log(res);
        }).cath(function (err) {
            console.log(err);
        })

        )
    }


}
router.get("/api/articles", articleFunction.getArticles)

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;