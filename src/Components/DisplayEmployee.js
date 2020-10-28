import React from 'react';
  


const Display = ({beer}) => {
    return (
      <div>
        <h2>{beer.quote}</h2>
        <img src={beer.image} alt={beer.name} />
       
      </div>
    )
  }
  export default Display;