import React, { Component } from 'react';
import SignIn from './SignIn';

class App extends Component {
  handlePerson = (person) => {
    this.setState({person: person});
    console.log('yodawg', person);
  }
  render() {
    return (
      <SignIn onSelectPerson={this.handlePerson} />
    );
  }
}

export default App;
