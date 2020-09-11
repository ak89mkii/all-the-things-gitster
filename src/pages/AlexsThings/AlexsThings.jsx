import React from 'react';
import AlexThing from '../../components/AlexThing/AlexThing'

const AlexsThings = (props) => {
  return ( 
    <>
      <h1>Alex Things</h1>
      {props.alexsThings.map((thing, idx) => 
        <AlexThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default AlexsThings;