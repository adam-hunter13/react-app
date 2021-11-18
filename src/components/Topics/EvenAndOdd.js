import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        };
    }
    solve = (e) => {
        const arr = this.state.userInput.split(',');
        const evens = [];
        const odds = [];

        for (let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0 ) {
                evens.push(arr[i])
            } else {
                odds.push(arr[i])
            }
        }

        this.setState({
            ...this.state,
            evenArray: evens,
            oddArray: odds,
        });
    };

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>EvenAndOdd</h4>
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={this.solve}>Split</button>
                <span className="resultsBox">Evens: [{this.state.evenArray.join(",")}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray.join(",")}]</span>
            </div>
        );
    }
}

  export default EvenAndOdd;