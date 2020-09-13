import React from 'react';
import { CardList } from './card-list/Card-List';
import { SearchBox } from './search-box/Search-Box';
import './App.css';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onFieldChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={'Search Monsters'}
          onFieldChange={this.onFieldChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
