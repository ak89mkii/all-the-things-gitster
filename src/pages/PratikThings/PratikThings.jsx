import React from 'react';
import PratikThing from '../../components/PratikThing/PratikThing'

const PratikThings = (props) => {
  return ( 
    <>
      <h1>Pratik's Things</h1>
      {props.pratiksThings.map((thing, idx) => 
        <PratikThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default PratikThings;