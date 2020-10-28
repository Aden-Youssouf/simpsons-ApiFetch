import React from 'react';
  


const Display = ({Quote}) => {
    return (
      <div>
        <h2>{Quote.quote}</h2>
        <img src={Quote.image} alt={Quote.name} />
        <p>{Quote.character}</p>
       
      </div>
    )
  }
  export default Display;