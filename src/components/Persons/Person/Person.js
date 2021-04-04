import React from 'react';
import personStyles from './Person.module.css'

const person = (props) => {
    return (
        <div className={personStyles.Person}>
            <p onClick={props.click}> Hello, I'm {props.name}, and I'm {props.age} years old,
                or you can use {computeAge()}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

const computeAge = () => Math.floor(Math.random() * 30)

export default person;
