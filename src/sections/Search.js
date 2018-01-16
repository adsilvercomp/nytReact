import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            startYear: '',
            endYear: ''
        };
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
          });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.topic + this.state.startYear + this.state.endYear );
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Topic:
          <input name="topic" type="text" value={this.state.topic} onChange={this.handleChange} />
                </label>
                <label>
                    Start Year:
          <input name="startYear" type="text" value={this.state.startYear} onChange={this.handleChange} />
                </label>

                <label>
                    End Year:
          <input name="endYear" type="text" value={this.state.endYear} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default Search;