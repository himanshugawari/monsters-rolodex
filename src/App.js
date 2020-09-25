import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          // onChange={(e) => console.log(e.target.value)
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            // this.setState({ searchField: e.target.value }, () =>
            //   console.log(this.state)
            // );
            // console.log("Extra", this.state);
          }}
        />
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
