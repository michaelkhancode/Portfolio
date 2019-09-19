import React from 'react';
import './App.css';
import MainPage from '../components/MainPage';
import Projects from '../components/Projects';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path:"mainpage"
    }
  }

  changePath = (newPath) => {
    this.setState({ path:newPath });
  };

  render(){
    switch (this.state.path) {
      case "mainpage":
        return (
          <div>
            <Navigation changePath={this.changePath}/>
            <MainPage />
          </div>
        )
      case "projects":
        return (
          <div>
            <Navigation changePath={this.changePath}/>
            <Projects />
          </div>
        )
        case "contact":
          return (
            <div>
              <Navigation changePath={this.changePath}/>
              <Contact />
            </div>
          )
      default:
        break;
    }
  }
}

export default App;
