import React, { Component, Fragment } from 'react';
import HeroImage from '../components/HeroImage';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      people1: [],
      people2: [],
      people3: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    const urls = [
    'https://swapi.dev/api/people/',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
    'https://swapi.dev/api/people/?page=4'
  ]
    Promise.all(urls.map(url => fetch(url)
      .then(response=> response.json())
      .catch(Error)
    ))      
      .then(people => {
        this.setState({ 
        people: people[0].results,
        people1: people[1].results,
        people2: people[2].results,
        people3: people[3].results,      
      })
    })     
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { people, people1, people2, people3, searchfield } = this.state;
    let filtered = (result) => {
      return result.name.toLowerCase().includes(searchfield.toLowerCase());
    }
    const filteredpeople = people.filter(filtered);
    const filteredpeople1 = people1.filter(filtered);
    const filteredpeople2 = people2.filter(filtered);
    const filteredpeople3 = people3.filter(filtered);
    
    return !people.length?
    <h1>Loading</h1>:
    (
      <Fragment>
      <div className="main__header">
        <HeroImage />        
        <header>
          <h1>Joygi's people</h1>
          <nav>
            <ul>
              <li><a href="index.html">This-App</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact me</a></li>
              <li><SearchBox searchChange={this.onSearchChange}/></li>
            </ul>
          </nav>
        </header>
        </div>
        <main className='tc'>        
          <Scroll>
            <ErrorBoundry>
              <CardList 
              people={filteredpeople}
              people1={filteredpeople1}
              people2={filteredpeople2}
              people3={filteredpeople3}
              />
            </ErrorBoundry>
          </Scroll>
        </main>
        <Footer />
        </Fragment>
      );
  }
}

export default App;