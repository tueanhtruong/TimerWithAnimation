import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: "",
    };
  }

  onDismiss = (id) => {
    const newList = this.state.list.filter((item) => item.objectID !== id);
    this.setState({ list: newList });
  };

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {this.state.list
          .filter(
            (item) =>
              !this.state.searchTerm ||
              item.title
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
          )
          .map((item) => (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  type="button"
                  onClick={() => {
                    this.onDismiss(item.objectID);
                  }}
                >
                  Dismiss
                </button>
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
