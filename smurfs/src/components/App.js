import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';



import { fetchSmurf, postSmurf, deleteSmurf } from '../actions/smurfAction.js'

import SmurfCard from './smurfCard.js'
import "./App.css";

const App = props => {

  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '', id:'' })
  useEffect(() => {
    props.fetchSmurf();
  },[])
  

  const smurfCards = props.smurfs.smurfs.map(element => {
    return <SmurfCard smurf={element} deleteSmurf={deleteSmurf} setNewSmurf={setNewSmurf} key={element.id} />
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
    setNewSmurf({name:'', age:'', height:'', id:''})
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>{smurfCards}</div>
      <h3>Add a smurf</h3>
      <form onSubmit={event => submitNewSmurf(event)}>
        <label htmlFor="name">
          Name:
          <input name="name" type="text" onChange={inputChange} />
        </label>
        <label htmlFor="age">
          Age(in years):
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
  { fetchSmurf, postSmurf, deleteSmurf }
)(App)