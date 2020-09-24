import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    const myAsyncFunction = async () => {
      const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await userResponse.json();
      console.log(userResponse);
      console.log(users);
      this.setState({ monsters: users });
    };
    myAsyncFunction();

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   // .then((users) => console.log("From Fetch", users))
    //   .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Himanshu">
          {/* <h1>Himansu Gawari</h1> */}
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
