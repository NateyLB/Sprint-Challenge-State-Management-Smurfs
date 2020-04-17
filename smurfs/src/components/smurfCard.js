import React from 'react'

const SmurfCard = props =>{
    return(
        <div>
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Height: {props.height}</h4>
        </div>
    )
}

export default SmurfCard;