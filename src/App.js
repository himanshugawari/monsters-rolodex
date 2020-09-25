import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
