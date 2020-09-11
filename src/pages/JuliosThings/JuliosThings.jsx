import React from 'react';
import JulioThing from '../../components/JulioThing/JulioThing'

const JuliosThings = (props) => {
  return ( 
    <>
      <h1>Julio's Things</h1>
      {props.juliosThings.map((thing, idx) => 
        <JulioThing
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default JuliosThings;