import React from "react";
import NavBar from "../components/NavBar/NavBar";
import API from "../utils/API"



class Saved extends React.Component {

    //reading from the database

    componentDidMount() {
        console.log("component did mount is working");
        this.loadArticles();
      }

      loadArticles = () => {
          console.log("load articles has been hit");
        API.getSaved()
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    

    render() {
        return (
            <div>
                <NavBar />

                <div className="container">
                    <h1 className="title">Saved Articles</h1>
                    <br />
                </div>

            </div>


        )
    }


}

export default Saved;