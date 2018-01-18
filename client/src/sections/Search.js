import React from "react";
import Results from "../components/Results"
console.log(Results);

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            startYear: '',
            endYear: '',
            articles: ["ASP", "Hek", "hi"]
        };
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
        alert('A name was submitted: ' + this.state.topic + this.state.startYear + this.state.endYear);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="title">New York Times React App</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="inputTopic">
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

                            <input name="startYear" type="text" value={this.state.startYear} onChange={this.handleChange} />
                        </div>
                        <br />


                        <div className="form-group">
                            <label>
                                End Year
                    </label>
                            <br />

                            <input name="endYear" type="text" value={this.state.endYear} onChange={this.handleChange} />
                        </div>
                        <br />

                        <input type="submit" value="Submit" />
                    </form>

                </div>

                <div className="container">
                    <h1 class="title">Article Response</h1>
                    <br />
                    <Results
                        articles={this.state.articles}
                    />
                </div>
            </div>

        );
    }

}

export default Search;