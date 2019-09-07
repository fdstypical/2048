import React from 'react';
import './App.css';
import Field from './field';
import {initialCreate, create} from './logic/create';
import checkResult from './logic/checkResult';
import Header from './header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      map: initialCreate(),
      mapChange: false
    };
  }

  handleMove = (e) => {
    let map = this.state.map,
        newMap;

    switch(e.keyCode){

      case 37:
        newMap = checkResult('left', map);
        break;
      case 38:
        newMap = checkResult('top', map);
        break;
      case 39:
        newMap = checkResult('right', map);
        break;
      case 40:
        newMap = checkResult('bottom', map);
        break;
      default:
        return;
        break;
    }

    this.setState({
      map: newMap.map,
      mapChange: newMap.mapChange
    });

    if(this.state.mapChange){
      setTimeout( () => {
        this.setState({map:create(this.state.map)});
      },150);
    }
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleMove);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleMove);
  }

  // new game reloader

  newGame = () => {
    this.setState({map:initialCreate()});
  }

  render(){
    return (
      <div>
        <Header 
          score = {this.state.map}
          handleNewGame = {this.newGame}
        />
        <Field 
          map={this.state.map}
        />
      </div>
    );
  }
}

export default App;
