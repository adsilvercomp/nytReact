const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const db = require("../models");


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
    },

    create: function (req, res) {
        console.log("req.body Hola " + req.body)
        console.log(JSON.stringify(req.body));
        db.article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },

    getSaved: function(req, res){
        console.log("hello");
        db.article
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}
router.get("/api/articles", articleFunction.getArticles)
router.post("/api/articles", articleFunction.create)
router.get("/api/articles/saved", articleFunction.getSaved)


// If no API routes are hit, send the React app
router.use(function (req, res) {
    console.log("something is off");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;