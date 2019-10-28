import React from 'react';
import './App.css';
import SimpsonsQuoteCard from './components/SimpsonsQuoteCard';
//import axios from 'axios';

// const simpsonsCharacters = [{
//   quote: "Facts are meaningless. You could use facts to prove anything that is even remotely true.",
//   character: "Homer Simpson",
//   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
// },]


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      character :[]
    }
    //this.getCharacter = this.getCharacter.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    }


  componentDidMount() {
    fetch('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.json())
      .then(data => {

        this.setState({
          character: data,
        });
      });
  }
  render () {
    return (
      <div className="App">
        <SimpsonsQuoteCard character={this.state.character}/>
        <button type="button" onClick={this.componentDidMount}>Get new quote</button>
      </div>
    );
  }
}


export default App;
