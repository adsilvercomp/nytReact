import React from "react";
import "./Articles.css";

class Articles extends React.Component {

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




export default Articles;