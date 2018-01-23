import React from "react";



const Results = (props) => (
        


        props.articles.map(article => (
            <div>
            <h3>{"Title: "+ article.headline.main}</h3>
            <h3>{"URL: " + article.web_url}</h3>
            <h3>{"Date: "+ article.pub_date}</h3>
            <input type="submit" value="Save Article" />
            <hr/>
            </div>
            
            // <h3>{"Headline: " + article[0].date}</h3>
            // <h3>{"Date:" + }</h3>
            
        ))
        
            
    )

    












export default Results;
