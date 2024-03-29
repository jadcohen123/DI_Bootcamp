import cards from "./cards.json";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: cards.superheroes,
      clicked: cards.superheroes,
      score: 0,
      id: [],
    };
  }

  clicked = (e) => {
    let id = e.target.id;
    this.setState({ id: [...this.state.id, id] });
    this.setState({ array: this.state.array.sort(() => Math.random() - 0.5) });
    if (this.state.id.includes(e.target.id)) {
      this.setState({ score: 0 });
      this.setState({ id: [] });
    } else {
      this.setState({ score: this.state.score + 1 });
      if (this.state.score > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", this.state.score);
      }
    }
  };

  del = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="App-header">
        <div className="text">
          <h1>Superheroes Memory Game</h1>
          Score:{this.state.score} <br></br>Top score:
          {localStorage.getItem("highscore")}
          <br></br>
          <button onClick={this.del}>Delete score</button>
        </div>

        <div className="instruction">
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
        {this.state.array.map((item, i) => {
          return (
            <div onClick={this.clicked} id={item.id} key={i} className="card">
              <img id={item.id} src={item.image} alt="Hero"></img>
              <p>
                <b>Name:</b> {item.name}
              </p>
              <p>
                <b>Occupation:</b> {item.occupation}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;