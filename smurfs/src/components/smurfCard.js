import React from 'react'
import { v4 as uuid } from 'uuid';

const SmurfCard = props =>{
    const deleteAndUpdate = () => {
        props.deleteSmurf(props.smurf.id.toString())
        props.setNewSmurf({name:'', age:'', height:'', id:''})
    }
    return(
        <div className="smurf-card">
            <h4>Name: {props.smurf.name}</h4>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
            <button onClick={props.deleteSmurf(props.smurf.id.toString())}>X</button>
        </div>
    )
}

export default SmurfCard;