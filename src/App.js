import React from 'react';
import './App.css';
import {ResumeGraphComponent} from './pages/ResumeGraph';
import ToggleSlider from './components/toggle';
import Resume from './pages/Resume';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {developerMode: true};
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(val) {
    this.setState({developerMode: val});
  }

  render() {
    return (
      <div className="App">
        <div style={{float: "right"}}>
          <ToggleSlider on="developer mode" off="recruiter mode" onChange={this.changeMode} />
        </div>
        {this.state.developerMode ? (
          <ResumeGraphComponent />
        ) : (
            <Resume />
          )}
      </div >
    );
  }
}

export default App;
