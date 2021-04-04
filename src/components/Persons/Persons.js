import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return (
            <Person key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => props.click(index)}
                    change={(event) => props.change(event, person.id)}
            />
        );
    });
}

export default persons;