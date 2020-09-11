import React from 'react';

const AlexThing = (props) => {
  return ( 
    <>
      <div class="card" style={{width: "18rem"}}>
        <img src={props.thing.image} class="card-img-top" alt="benimage" />
        <div class="card-body">
          <h5 class="card-title">{props.thing.name}</h5>
          {props.thing.attributes.map((attribute, idx) =>
            <p key={idx} class="card-text">{attribute}</p> 
          )}
          <a href="/" class="btn btn-primary">Go Back</a>
        </div>
      </div>
    </>
   );
}
 
export default AlexThing;