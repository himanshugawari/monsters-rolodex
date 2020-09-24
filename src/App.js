import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // {
        //   name: "Frankenstein",
        //   id: "asc1",
        // },
        // {
        //   name: "Dracula",
        //   id: "asr1",
        // },
        // {
        //   name: "Zombie",
        //   id: "asw1",
        // },
      ],
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
      // const secondUser=users[1];
      // console.log(secondUser);
      // const postResponse=await fetch('https://jsonplaceholder.typicode.com/posts?userId='+secondUser.id);
      // const posts=await postResponse.json();
      // console.log(posts);
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
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
