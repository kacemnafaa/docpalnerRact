import React from 'react'
import './card.css';


function Card(props){
    const card=props.card
    
    return (<div class="servece-card" style={{background: card.baground}}>
    <h2 class="card-title">{card.title}</h2>
    <h1 class="title">{card.txt}</h1>
   { props.option && 
    <select className="option-bar" >
      <option>
        argentina
      </option>
      <option>
      australia
      </option>
      <option>
        brasil
      </option>
      <option>
        chili 
      </option>
    </select>
  }
    <img class="image" src={card.img} max-width="100%" height="auto" alt="Card image" />
   
  </div>);
}
export default Card;


