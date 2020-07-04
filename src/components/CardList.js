import React from 'react';
import Card from './Card';

const CardList = ({ people, people1, people2, people3 }) => {
  // if(true){
  //   throw new Error ('There was an Error, we are fixing your people');
  // }
  return (
    <article>
      {
        [...people, ...people1, ...people2, ...people3].map((result, i) => {
          return (
            <Card
              key={i}
              name={result.name}
              height={result.height}
              hair_color={result.hair_color}
              />
          );
        })
      }
    </article>
  );
}

export default CardList;