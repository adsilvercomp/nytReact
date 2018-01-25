import React from "react";
import { Results, ResultItem } from "../components/Results"
import API from "../utils/API"
import Nav from "../components/NavBar"
console.log(Results);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: 'New York',
            beginDate: '20170101',
            endDate: '20180118',
            articles: []
        };
    }

    saveArticle = (articleName, articleUrl, articleDate) => {
        console.log("SAVE ARTICLE FUNCTION" + articleName);

        API.saveArticles({
            name: articleName, 
            url: articleUrl,
            date: articleDate
        })
    }


    handleChange = (event) => {
        console.log(event);
        const target = event.target;
        console.log("event target " + event.target);
        const value = target.value
        console.log("target value " + target.value);
        const name = target.name;
        console.log("target name " + target.name);

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        API.getArticles({
            topic: this.state.topic,
            beginDate: this.state.beginDate,
            endDate: this.state.endDate
        })
            //setState should be set to the api response.      


            //you need the title, the date and the url
            // .then(res => console.log(res.data.docs[0].headline.main))
            // res.data.docs[0].web_url
            //.then(res => this.setState( {articles: [res.data.docs[0].headline]}))
            .then(res => {
                let artArray = []
                for (let x = 0; x < res.data.docs.length; x++) {
                    artArray.push(res.data.docs[x])
                }
                console.log("artArray" + artArray);
                this.setState({ articles: artArray });
            }
            )
            .catch(err => console.log("There is an error" + err));

        // alert('A name was submitted: ' + this.state.topic + this.state.beginDate + this.state.endDate);
        console.log(this.state.articles);
        console.log(API.getArticles);
    }





    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <h1 className="title">New York Times React App</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputTopic">
                                Topic
                    </label>
                            <br />

                            <input name="topic" type="text" value={this.state.topic} onChange={this.handleChange} />
                        </div >
                        <br />


                        <div className="form-group">
                            <label>
                                Start Year
                    </label>
                            <br />

                            <input name="beginDate" type="text" value={this.state.beginDate} onChange={this.handleChange} />
                        </div>
                        <br />


                        <div className="form-group">
                            <label>
                                End Year
                    </label>
                            <br />

                            <input name="endDate" type="text" value={this.state.endDate} onChange={this.handleChange} />
                        </div>
                        <br />

                        <input type="submit" value="Submit" />
                    </form>

                </div>

                <div className="container">
                    <h1 className="title">Article Response</h1>
                    <br />
                    <Results>
                        {this.state.articles.map(article => {
                            return (
                                
                                    <ResultItem  >
                                        <strong>
                                        {"Title: " + article.headline.main}
                                        <br />
                                        {"URL: " + article.web_url}
                                        <br />
                                        {"Date: " + article.pub_date}
                                        <br />
                                        </strong>

                                        <button onClick={() => this.saveArticle(article.headline.main, article.web_url, article.pub_date )}>Save</button>
                                    </ResultItem>
                               
                            );
                            
                        })}
                    </Results>
                </div>
            </div>

        );
    }

}

export default Search;