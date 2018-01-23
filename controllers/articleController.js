const path = require("path");
const router = require("express").Router();
const axios = require("axios");
// const db = require("../models");

const articleFunction = {
    getArticles: function (req, res) {
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                "api-key": "ded0f4e6c7134d81ac76e8c881189fe1",
                "q": req.query.topic,
                "begin_date": req.query.beginDate,
                "end_date": req.endDate
            }
        }).then(function (data) {
            console.log(data.data.response);
            console.log(res); 
            res.json(data.data.response);
           

        }).catch(function (err) {
            console.log(err);
        })
    }
}
router.get("/api/articles", articleFunction.getArticles)


// If no API routes are hit, send the React app
router.use(function (req, res) {
    console.log("something is off");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;