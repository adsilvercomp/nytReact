import React from "react";
import "./Results.css";

class Results extends React.Component {

    render() {
        return (
            <div className="list-overflow-container">
              <ul className="list-group">
                {this.props.children}
              </ul>
            </div>
          );
    }
}




export default Results;







// const Results = (props) => (

    

  
//     props.articles.map(article => (
//         <div key={article.headline.main} >   
        
//            <h4> {"Title: " + article.headline.main}</h4>
//            <h4> {"URL: " + article.web_url} </h4>
//            <h4> {"Date: " + article.pub_date} </h4>
//             {/* <input type="submit" value="Save Article" /> */}
//             <button onClick ={this.saveArticle(article.headline.main)}>Save Article</button>
//             <hr />
    
//         </div>
//     ))
    

// )