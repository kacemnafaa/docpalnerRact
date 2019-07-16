import React from 'react';
import './App.css';
import Card from './card';
import Nav from './navbar';
import Txt from './text-doc';
import Town from './cardtown';
import ICard from './itemcard';
import AFooter from './footer';
import Title from './title';
const par1="We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
const par2="We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
const service1={
  baground:'#00ccb1',
  title:'For patients',
  txt:'Find a doctor, book a visit and solve any health-related doubt',
  img:'https://www.docplanner.com/img/screen-marketplace@2x.png',
  // option:'true',
 
}
const service2={
  baground:'#3d83df',
  title:'For doctors',
  txt:'Save time managing visits and cut no-shows by half',
  img:'https://www.docplanner.com/img/screen-saas@2x.png',
  // option:'false',

}

const theTown = [
  {
    name: 'warsaw',
    image: 'https://www.docplanner.com/images/warsaw.png',
    
  },
  {
    name: 'Barcelona',
    image: 'https://www.docplanner.com/images/barcelona.png',
    
  },
  {
    name: 'istanbul',
    image: 'https://www.docplanner.com/images/istanbul.png',
    
  },
  {
    name: 'Rome',
    image: 'https://www.docplanner.com/images/rome.png',
    
  },
  {
    name: 'Mexico',
    image: 'https://www.docplanner.com/images/mexico-city.png',
    
  },
  {
    name: 'Curitiba',
    image: 'https://www.docplanner.com/images/curitiba.png',
    
  },
  
]

function App() {
  return (
   
    <div className="App">
      <div>
       <Nav/>
       </div>
       <div className="title-item">
        <Title />
        </div>
        <div className="par1">
      <Txt txt={par1} />
      <Txt txt={par2} />
      </div>
     
      <div className="service-card">
      <Card option={true}  card={service1}/>
      <Card card={service2}/>
      <ICard/>
      </div>
      
      <Town   town={theTown}/>
      <AFooter/>
       </div>
     
    
   
    
   
  );
}

export default App;
