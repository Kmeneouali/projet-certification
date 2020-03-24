import React, { Component } from "react";

class SelectionItem extends Component {
  render() {
    const selected = this.props.checked ? "selected" : "";

    return (
      <div className={`selectionItem ${selected} `}>
        <input
          type="radio"
          name={this.props.id}
          id={this.props.id}
          value={this.props.id}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default SelectionItem;
