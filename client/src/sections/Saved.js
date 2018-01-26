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
                this.setState({ saved: savedArray });
            }
            )
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        // console.log("article id " + id );
        API.delete(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));

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

                                    <IndividualArticles >
                                        <strong>
                                            {"Title: " + article.name}
                                            <br />
                                            {"URL: " + article.url}
                                            <br />
                                            {"Date: " + article.article_Date}
                                            <br />
                                        </strong>

                                        <button onClick={() => this.deleteArticle(article._id)}>Delete</button>
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