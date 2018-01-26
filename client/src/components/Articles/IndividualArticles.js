import React from "react";

class IndividualArticles extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.children}
            </li>
        )
    }
}

export default IndividualArticles;