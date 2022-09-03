import React from 'react'
import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'
import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  })
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'
        onChangeHandler = {onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters = {filteredMonsters} />
    </div>
  )
}

export default App