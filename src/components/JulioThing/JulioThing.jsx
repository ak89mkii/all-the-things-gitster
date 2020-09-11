import React from 'react';

const JulioThing = (props) => {
  return ( 
    <>
      <div class="card" style={{width: "18rem"}}>
        <img src={props.thing.image} class="card-img-top" alt="julioimage" />
        <div class="card-body">
          <h5 class="card-title">{props.thing.name}</h5>
          {props.thing.attributes.map((attribute) =>
            <p class="card-text">{attribute}</p> 
          )}
          <a href="/" class="btn btn-primary">Go Back</a>
        </div>
      </div>
    </>
   );
}
 
export default JulioThing;