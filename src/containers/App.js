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
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length?
    <h1>Loading</h1>:
    (
      <Fragment>
      <div className="main__header">
        <HeroImage />        
        <header>
          <h1>Joygi's Robots</h1>
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
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </main>
        <Footer />
        </Fragment>
      );
  }
}

export default App;