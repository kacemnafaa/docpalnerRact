import React from 'react';
import image from './logo.png';
import './App.css';
import flag from './flag.png';
import visits from './visits.png';

import ItemsCard from './carditem';
let TheItemCard=[
  {image:flag, name:'Leader in 10 countries', paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:visits, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:flag, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:flag, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  ,
  ]

    const ICard=() =>{
       
   
        return  <section id="card" >   
        <div class="container-fluid background-img baground">
          
          <div class="row " >
              
              <div class="col-lg-4 py-5 itemcartitle "> 
                             <h1 class="display-6  mb-0">
                                  <strong>The world's 
                                    biggest healthcare platform</strong>
                             </h1>
                            <p class="text-muted  py-3">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
               
             </div>
     
             <div class="col-lg-8 py-4 d-flex org1   ">
             
             <ItemsCard itemscardlist={TheItemCard}/>

            </div>
            </div>
            </div>
        </section>
    }
    export default ICard ;