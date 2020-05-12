import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error ('There was an Error, we are fixing your Robots');
  // }
  return (
    <article>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </article>
  );
}

export default CardList;