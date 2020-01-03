import React from "react";
import "./App.css";
import Field from "./field";
import { initialCreate, create } from "./logic/create";
import checkResult from "./logic/checkResult";
import Header from "./header";
import checkLose from "./logic/checkLose";
import LoseModal from "./loseModal";

// react-swipeable
import { useSwipeable, Swipeable } from "react-swipeable";

// hello world(test)...

const config = {
  delta: 10, // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
  trackTouch: true, // track touch input
  trackMouse: false, // track mouse input
  rotationAngle: 0 // set a rotation angle
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: initialCreate(),
      mapChange: false,
      loseGame: false
    };
  }

  handleMove = e => {
    let map = this.state.map,
      newMap,
      direction;

    if (e.keyCode === 37 || e.dir === "Left") direction = "left";
    if (e.keyCode === 38 || e.dir === "Up") direction = "top";
    if (e.keyCode === 39 || e.dir === "Right") direction = "right";
    if (e.keyCode === 40 || e.dir === "Down") direction = "bottom";

    switch (direction) {
      case "left":
        newMap = checkResult(direction, map);
        break;
      case "top":
        newMap = checkResult(direction, map);
        break;
      case "right":
        newMap = checkResult(direction, map);
        break;
      case "bottom":
        newMap = checkResult(direction, map);
        break;
      default:
        return;
        break;
    }

    this.setState({
      map: newMap.map,
      mapChange: newMap.mapChange
    });

    if (this.state.mapChange) {
      this.setState({ map: create(this.state.map) });

      // check lose
      if (this.state.map.length === 16) {
        this.setState({ loseGame: checkLose(this.state.map) }); // check lose!
      }
    }
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleMove);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleMove);
  }

  // new game reloader

  newGame = () => {
    this.setState({
      map: initialCreate(),
      loseGame: false
    });
  };

  render() {
    return (
      <Swipeable onSwiped={eventData => this.handleMove(eventData)} {...config}>
        <div className="app-wrap">
          <Header score={this.state.map} handleNewGame={this.newGame} />
          <Field map={this.state.map} />

          {// lose modal... ;)
          this.state.loseGame && <LoseModal tryAgain={this.newGame} />}
        </div>
      </Swipeable>
    );
  }
}

export default App;
