import axios from "axios";


export default {
    //passing parameters from Search.js file to API.js
    getArticles: function (search) {
        return axios.get("/api/articles", { params: search })
    },


    saveArticles: function (save) {
        return axios.post("/api/articles", save);
    }, 

    getSaved: function(){
        return axios.get("/api/articles/saved")
    },

    delete: function(id){
        return axios.delete("/api/articles/delete" + id)
    }

};





