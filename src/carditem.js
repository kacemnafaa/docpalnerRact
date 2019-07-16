import React from 'react';

import './App.css';

 function ItemsCard(props){
     const itemscardlist=props.itemscardlist

     let itemscardhtml=[]
             itemscardhtml= itemscardlist.map((itm,i)=>
             
                   <div className="col-lg-4   mb-0 taill-item " >
                 <div key={i} className="itm smallll-card " style={{padding:'5px'}}>
                <img className="img " src={itm.image}/>
                <div className="text  mb-0">
                <p> {itm.name}</p>
                <p className=" text text-muted "> {itm.paragraphe}</p>
                </div>
                </div>
                </div> 
               
               )
    return itemscardhtml
 }





export default ItemsCard;

// {itemscardhtml= itemscardlist.map((itm,i)=>
             
//                    <div className="col-lg-4 smallll-card  mb-0 " >
//                  <div key={i} className="itm " style={{padding:'15px'}}>
//                 <img className="img " src={itm.image}/>
//                 <div className="text  mb-0">
//                 <p> {itm.name}</p>
//                 <p className=" text text-muted "> {itm.paragraphe}</p>
//                 </div>
//                 </div>
//                 </div> 
               
//                )
//     return itemscardhtml}
 
