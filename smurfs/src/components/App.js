import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';


import { fetchSmurf, postSmurf } from '../actions/smurfAction.js'

import SmurfCard from './smurfCard.js'
import "./App.css";

const App = props => {

  const [smurfs, setSmurfs] = useState([]);
  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '', id: uuid() })
  useEffect(() => {
    props.fetchSmurf();
  }, [])
  const smurfCards = props.smurfs.smurfs.map(element => {
    return <SmurfCard name={element.name} age={element.age} height={element.height} key={element.id} />
  })

  const inputChange = event => {
    event.persist();
    const newSmurfData = {
      ...newSmurf,
      [event.target.name]: event.target.name === "height" ? `${event.target.value}cm` : event.target.value
    }
    setNewSmurf(newSmurfData);
    console.log({newSmurf})
  };

  const submitNewSmurf = event =>{
    event.preventDefault();
    props.postSmurf(newSmurf)
    setNewSmurf({name:'', age:'', height:'', id:uuid()})
  }


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>{smurfCards}</div>
      <h3>Add a smurf</h3>
      <form>
        <label htmlFor="name">
          Name:
          <input name="name" type="text" onChange={inputChange} />
        </label>
        <label htmlFor="age">
          Age:
          <input name="age" type="text" onChange={inputChange} />
        </label>
        <label htmlFor="height">
          Height(in cm):
          <input name="height" type="text" onChange={inputChange} />
        </label>
      <input type='submit'/>
      </form>
    </div>
  );
}

//data from reducer
const mapStateToProps = state => {
  return {
    smurfs: state.smurfReducer
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, postSmurf }
)(App)