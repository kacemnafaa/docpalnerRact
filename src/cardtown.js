import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import './App.css';
function Town(props){
   const town=props.town
  return(
 
  <div  className="towCard">
 { town.map((el,i)=>
  <div className="imgcard"  >
    <Card key={i} style={{ width: '309px' } }>
    <Card.Img variant="top" src={el.image} />
    <Card.Body>
      <div className="imgcard2" >
    <span  >{el.name}</span><Button variant="primary">See OPENINGS</Button>
     </div>
    </Card.Body>
  </Card>
  </div>)
}</div>
   )
  
}
export default Town;



