import React from "react";



const Results = (props) => (
        


        props.articles.map(article => (

            <h3>{"Title: " + article.main}</h3>
            // <h3>{"Headline: " + article[0].date}</h3>
            // <h3>{"Date:" + }</h3>
            
        ))
        
            
    )

    












export default Results;
