import React from 'react';
import cockpitStyles from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(cockpitStyles.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(cockpitStyles.bold);
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = cockpitStyles.Red;
    }
    return (
        <div className={cockpitStyles.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.click}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;