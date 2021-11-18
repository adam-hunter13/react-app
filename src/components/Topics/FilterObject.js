import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                name: 'Adam Hunter',
                age: 27,
                },

                {
                name: 'Zachary Sterman',
                age: 29,
                },

                {
                name: 'David Hong',
                age: 36,
                }
      ],

      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterFilteredArray(prop) {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];
    
    for ( var i = 0; i < unFilteredArray.length; i++ ) {
      if ( unFilteredArray[i].hasOwnProperty(prop) ) {
        filteredArray.push(unFilteredArray[i]);
      }
    }

    this.setState({ 
        filteredArray: filteredArray 
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> unFiltered: { JSON.stringify(this.state.unFilteredArray) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterFilteredArray(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray) } </span>
      </div>
    )
  }
}