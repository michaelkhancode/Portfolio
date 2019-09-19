import React from 'react';
import './App.css';
import MainPage from '../components/MainPage';
import Projects from '../components/Projects';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path:"projects"
    }
  }

  render(){
    switch (this.state.path) {
      case "mainpage":
        return <MainPage />
      case "projects":
        return <Projects />
      default:
        break;
    }
  }
}

export default App;
