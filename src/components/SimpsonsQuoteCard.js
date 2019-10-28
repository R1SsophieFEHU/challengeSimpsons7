import React from 'react';


function SimpsonsQuoteCard ({character}) {
    return (
        <div>
            <figure className="QuoteCard">
            <img
            src={character[0] && character[0].image}
            alt= {`la tete de ${character}`}
            />
            <figcaption>
            <blockquote>
                {character[0] && character[0].quote}
            </blockquote>
            <cite>{character[0] && character[0].character}</cite>
            </figcaption>
            </figure>
        </div>
    );
}

export default SimpsonsQuoteCard;