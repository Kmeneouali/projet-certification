import React, { Component } from "react";
import Axios from "axios";
class AutoCompleteText extends Component {
  state = {
    suggestions: [],
    textValue: ""
  };

  handleChange = id => e => {
    const value = e.target.value;
    console.log(id);
    this.getData(value);
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.suggestions
        .sort()
        .filter(v => regex.test(v.city));
    }
    this.props.handleChange(id);
    this.setState({ suggestions: suggestions, textValue: value });
  };

  hanldeClickSelectSuggestions = value => {
    this.setState({ textValue: value, suggestions: [] });
  };
  renderSuggestions = () => {
    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li
              onClick={() =>
                this.hanldeClickSelectSuggestions(
                  "(" + item.code + ") " + item.city
                )
              }
              key={index}
            >
              ({item.code}) {item.city}
            </li>
          );
        })}
      </ul>
    );
  };
  getData = async codePostal => {
    Axios.get("https://vicopo.selfbuild.fr/cherche/" + codePostal)
      .then(response => {
        this.setState({ suggestions: response.data.cities });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { textValue } = this.state;
    const { id, label } = this.props;
    return (
      <div className="rowInput Gtay">
        <label>
          {label} <i>*</i>
          <i className="infos"></i>
        </label>
        <div className="select">
          <input
            type="text"
            id={id}
            value={textValue}
            onChange={this.handleChange(id)}
          />
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }
}

export default AutoCompleteText;
