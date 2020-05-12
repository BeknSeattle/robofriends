import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=220x220`} className="br-100 h4 w4 dib ba b--black-05 pa2"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
