import axios from "axios";


export default {
    //passing parameters from Search.js file to API.js
    getArticles: function (search) {
        console.log("articles object" + search);
        console.log("topic " + search.topic);
        console.log("beginDate " + search.beginDate);
        console.log("endDate " + search.endDate);
        // const topic = articles.topic
        // const beginDate = articles.beginDate
        // const endDate = articles.endDate
        console.log(search);
        return axios.get("/api/articles", { params: search })
    },


    saveArticles: function (save) {
        console.log("save data " + save);
        return axios.post("/api/articles", save);
    }



};





