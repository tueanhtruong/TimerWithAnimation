import React, { Component } from 'react';
import './App.css';

// const list = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

// ES6
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
// ES5
// var url = PATH_BASE + PATH_SEARCH + '?' + PARAM_SEARCH + DEFAULT_QUERY;
// output: https://hn.algolia.com/api/v1/search?query=redux

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
  }

  setSearchTopstories(result) {
    this.setState({ result });
  }

  fetchSearchTopstories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => this.setSearchTopstories(result));
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopstories(searchTerm);
  }

  onDismiss(id) {
    const updateHits = this.state.result.hits.filter(
      (item) => item.objectID !== id
    );
    this.setState({ result: { ...this.state.result, hits: updateHits } });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) return null;

    return (
      <div className='page'>
        <div className='interactions'>
          <Search value={searchTerm} onChange={this.onSearchChange}>
            <b>Search</b>
          </Search>
        </div>
        <Table
          pattern={searchTerm}
          list={result.hits}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => (
  <form>
    {children}
    <input type='text' onChange={onChange} value={value} />
  </form>
);

class Table extends Component {
  render() {
    const { pattern, list, onDismiss } = this.props;
    return (
      <div className='table'>
        {list
          .filter(
            (item) =>
              !pattern ||
              item.title.toLowerCase().includes(pattern.toLowerCase())
          )
          .map((item) => (
            <div key={item.objectID} className='table-row'>
              <span style={{ width: '40%' }}>
                <a href={item.url}>{item.title}</a>
              </span>
              <span style={{ width: '30%' }}>{item.author}</span>
              <span style={{ width: '10%' }}>{item.num_comments}</span>
              <span style={{ width: '10%' }}>{item.points}</span>
              <span style={{ width: '10%' }}>
                <Button
                  onClick={() => {
                    onDismiss(item.objectID);
                  }}
                  className='button-inline'
                >
                  Dismiss
                </Button>
              </span>
            </div>
          ))}
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const { onClick, children, className } = this.props;
    return (
      <button className={className} type='button' onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default App;
