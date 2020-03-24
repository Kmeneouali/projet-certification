import React, { Component } from "react";
import SelectionItem from "./SelectionItem";

class SelectionItems extends Component {
  state = { selectedOption: this.props.steps.choix[0].id };

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  render() {
    const choix = this.props.steps.choix;
    return (
      <div className="selectionItems">
        {choix.map((selection, index) => {
          return (
            <SelectionItem
              key={index}
              id={selection.id}
              title={selection.title}
              checked={this.state.selectedOption === selection.id}
              onChange={this.handleOptionChange}
            />
          );
        })}
      </div>
    );
  }
}

export default SelectionItems;
