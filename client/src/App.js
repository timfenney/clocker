import React, { Component } from 'react';
import SignIn from './ClockInOut';
import ClockInOut from './ClockInOut';
import ViewLog from './ViewLog';

const CLOCK_IN_OUT = 'clock-in-out';
const VIEW_LOG = 'view-log';

class App extends Component {
  state = {
    person: undefined,
    activity: CLOCK_IN_OUT,
  }
  handlePerson = (person) => {
    this.setState({person: person});
    console.log('yodawg', person);
  }
  handleClockInOut = () => {
    this.setState({
      ...this.state,
      person: undefined,
      activity: CLOCK_IN_OUT
    })
  }
  handleViewLog = () => {
    console.log('handleViewLog!!!!');
    this.setState({
      ...this.state,
      activity: VIEW_LOG
    })
  }
  render() {
    if (this.state.activity === CLOCK_IN_OUT) {
      return (
        <ClockInOut
          person={this.state.person}
          onSelectPerson={this.handlePerson}
          onViewLog={this.handleViewLog}/>
      );
    } else if (this.state.activity === VIEW_LOG) {
      return (
        <ViewLog
          person={this.state.person}
          onClockInOut={this.handleClockInOut} />
      );
    } else {
      return (
        <h2>Unknown state :-(</h2>
      );
    }
  }
}

export default App;
