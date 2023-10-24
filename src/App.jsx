import React, { Component } from 'react';


class laskin extends Component {
  constructor() {
    super();
    this.state = {
      arvo: '0',
    };
  }

  handleButtonClick = (event) => {
    const value = event.target.innerText;
    this.setState((prevState) => ({
      arvo: prevState.arvo === '0' ? value : prevState.arvo + value,}));
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.arvo);
      this.setState({ arvo: result });
    } catch (error) {
      this.setState({ arvo: 'Error' });
    }
  };

  handleClear = () => {
    this.setState({ arvo: '0' });
  };

  render() {
    return (
      <div>
        <div>{this.state.arvo}</div>
        <div>
          <button onClick={this.handleButtonClick}>1</button>
          <button onClick={this.handleButtonClick}>2</button>
          <button onClick={this.handleButtonClick}>3</button>
          <button onClick={this.handleButtonClick}>4</button>
          <button onClick={this.handleButtonClick}>5</button>
          <button onClick={this.handleButtonClick}>6</button>
          <button onClick={this.handleButtonClick}>7</button>
          <button onClick={this.handleButtonClick}>8</button>
          <button onClick={this.handleButtonClick}>9</button>
          <button onClick={this.handleButtonClick}>0</button>
          <button onClick={this.handleButtonClick}>+</button>
          <button onClick={this.handleButtonClick}>-</button>
          <button onClick={this.handleCalculate}>=</button>
          <button onClick={this.handleClear}>C</button>
        </div>
      </div>
    );
  }
}

export default laskin;

