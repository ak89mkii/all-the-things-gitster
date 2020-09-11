import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import BensThings from '../BensThings/BensThings'
import PratikThings from '../PratikThings/PratikThings'
import JuliosThings from '../JuliosThings/JuliosThings'

class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://i.imgur.com/C3PmdhO.jpg",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Rugby",
        image: "https://i.imgur.com/X4VC4nm.jpg",  
        attributes: ["scruffy", "happy", "sleepy", "wise"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],

    juliosThings: [
      { 
        name: 'Flash',
        image: 'https://i.imgur.com/uepNv4H.jpg',
        attributes: ['Favorite Hero', 'Fastest Man Alive', 'Crimson Comet', 'Scarlet Speedster']
      },
      {
        name: 'Nintendo',
        image: 'https://i.imgur.com/qPMww0L.jpg',
        attributes: ['super portable', 'great games', 'fun times']
      },
      {
        name: 'Cuban Food',
        image: 'https://i.imgur.com/W2Shar1.jpg',
        attributes: ['yummy in my tummy', 'best food ever', 'definitely not a taco', 'delicioso']
      },
      {
        name: 'Musicals',
        image: 'https://i.imgur.com/pfoaOFE.gif',
        attributes: ['these are a few of my favorite things', 'love musicals and great stories'] 
      },

    ],

    pratiksThings: [
      {
        name: 'Flat Earth',
        image: 'https://i.imgur.com/M7ioxoG.jpg',
        attributes: ['it looks flat', 'there is no curve', 'water finds its level']
      },
      {
        name: 'Rapsody',
        image: 'https://i.imgur.com/f1VoW7V.png',
        attributes: ['Mage','Fire/Frost/Arc', 'Badass']
      },
      {
        name: 'Compouter',
        image: 'https://i.imgur.com/rzd90BF.png',
        attributes: ['current gen corei7','mid range','1660 ti','upgrading soon']
      }
    ]

  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/themanliestthings">Ben's Things</a>
              <div>
              <a href="/pratiksthings">Pratik's Things</a>
              </div>
              <div>
              <a href='/juliosthings'>Julio's Things</a>
              </div>
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/themanliestthings'
          render={() => 
            <BensThings 
              bensThings={this.state.bensThings}
            />
        } />
          <Route 
          exact path='/pratiksthings'
          render={() => 
            <PratikThings 
              pratiksThings={this.state.pratiksThings}
            />
        }/>
        <Route 
        exact path='/juliosthings'
        render={() =>
        <JuliosThings
        juliosThings={this.state.juliosThings}
        />
        }
        />

      </>
      
    );
  }
}
 
export default App;

