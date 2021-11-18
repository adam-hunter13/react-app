import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["Hello", "Whats up", "Pizza"],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterString(userInput) {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];

        for ( var i = 0; i < unFilteredArray.length; i++ ) {
            if (unFilteredArray[i].includes(userInput) === true) {
              filteredArray.push(unFilteredArray[i]);
            }
          }
      
          this.setState({ 
              filteredArray: filteredArray 
          });
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>FilterString</h4>
                <span className="puzzleText">unFiltered: { JSON.stringify(this.state.unFilteredArray) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray) } </span>
            </div>
        )
    }
  }

  export default FilterString;