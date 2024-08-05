import React from 'react';
import './Card.css';

const Card = (props) => {
  const{id,firstName,lastName,phone,address,onDelete}=props;
  return (
    <div className='card'>
      <h1>{firstName}</h1>
      <p>{lastName}</p>
      <hr />
      <h4 id='phone'>Phone:{phone}</h4>
      <hr />
      <h4 id='add'>Address:{address}</h4>
      <hr />
      <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;