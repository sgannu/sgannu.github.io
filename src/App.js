import React from 'react';
import './App.css';
import {ResumeGraphComponent} from './pages/resume/ResumeGraph';
import ToggleSlider from './components/toggle';
import Resume from './pages/resume/Resume';

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
        <div className="no-print" style={{float: "right", position: "obsolute", left: "50px"}}>
          <ToggleSlider on="developer mode" off="recruiter mode" onChange={this.changeMode} />
        </div>
        {
          this.state.developerMode ? (
            <ResumeGraphComponent />
          ) : (
              <Resume />
            )
        }
      </div >
    );
  }
}

export default App;
