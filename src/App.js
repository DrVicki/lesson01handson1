import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      displayName: ''
    };
  }

  handleChange = evt => {
    this.setState({
      name: evt.target.value
    });
  };

  handleClick = evt => {
    this.setState({
      displayName: this.state.name
    });
  };


render() {
  return (
    <>
   <h1>Welcome to the Lesson01 app</h1>
   <p>Hi. learn with us!, {this.state.displayName || "We haven't been introduced."}
   </p>
   
   <p>Please enter your name below so we can get better acquainted.
   </p>
   <input value={this.state.name} onChange={this.handleChange} />

   <button onClick={this.handleClick}>Update Name</button>
   </>
  );
 }
}



export default App;
