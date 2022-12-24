// import { Component } from 'react' -> use for class component

import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

import './App.css'

const App = () => {
  const [title, setTitle] = useState('')
  const [searchField, setSearchField] = useState('') // [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
  
  const onTitleChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>

      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='Set Title'
      />
      <br />
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor () {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

// componentDidMount () {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users =>
//       this.setState(() => {
//         return { monsters: users }
//       })
//     )
// }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render () {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     return (

//     )
//   }
// }

export default App
