import React from 'react';
import axios from 'axios';

class SimpsonsQuoteCard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        image : "",
        character :"",
        quote: "",
    };    
  }

  charactersAPI=() =>{
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => {
        this.setState({
          image: response.data[0].image,
          character : response.data[0].character,
          quote : response.data[0].quote,
        });
      });
  };

  render () {
    return (
        <div>
            <figure className="QuoteCard">
                <img
                src={this.state.image}
                alt= {`la tete de ${this.state.character}`}
                />
            <figcaption>
                <blockquote>
                    {this.state.quote}
                </blockquote>
                <cite>{this.state.character}</cite>
            </figcaption>
            </figure>
            <button type="button" onClick={this.charactersAPI}>Get new quote</button>

        </div>    
    );
  }
}


export default SimpsonsQuoteCard;