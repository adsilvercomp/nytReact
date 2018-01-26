import React from "react";
import { Articles, IndividualArticles } from "../components/Articles"
import NavBar from "../components/NavBar/NavBar";
import API from "../utils/API"
import individualArticles from "../components/Articles/IndividualArticles";



class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: []
        };
    }

    //reading from the database

    componentDidMount() {
        console.log("component did mount is working");
        this.loadArticles();
    }

    loadArticles = () => {
        console.log("load articles has been hit");
        API.getSaved()
            .then(res => {
                let savedArray = []
                for (let x = 0; x < res.data.length; x++) {
                    savedArray.push(res.data[x])
                }
                console.log(savedArray);
                this.setState({ saved: savedArray });
                console.log(this.state.saved);
            }
            )
            .catch(err => console.log(err));
    };

    deleteArticle = () => {
        console.log("this is the delete article function")
    }



    render() {
        return (
            <div>
                <NavBar />

                <div className="container">
                    <h1 className="title">Saved Articles</h1>
                    <br />

                    <div className="savedArticles">
                    <Articles>
                        {this.state.saved.map(article => {
                            return (
                                
                                    <IndividualArticles  >
                                        <strong>
                                        {"Title: " + article.name}
                                        <br />
                                        {"URL: " + article.url}
                                        <br />
                                        {"Date: " + article.article_Date}
                                        <br />
                                        </strong>

                                        <button onClick={() => this.deleteArticle(article.headline.main, article.web_url, article.pub_date )}>Delete</button>
                                    </IndividualArticles>
                               
                            );
                            
                        })}
                    </Articles>

                    </div>

                </div>

            </div>


        )
    }


}

export default Saved;