import React, {Component} from 'react';
import './App.css';
import appStyles from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    state = {
        persons: [
            {
                id: 1,
                name: 'Max',
                age: 28
            },
            {
                id: 2,
                name: 'Manuel',
                age: 29
            },
            {
                id: 3,
                name: 'Stephanie',
                age: 26
            }
        ],
        country: 'Philippines',
        showPersons: false
    }

    handleChangeName = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    }

    handleDeletePerson = (index) => {
        console.log('Deleting person with index: ' + index);
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    handleTogglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             click={this.handleDeletePerson}
                             change={this.handleChangeName}/>
                </div>
            );
        }


        return (
            <div className={appStyles.App}>
                <Cockpit appTitle={this.props.title}
                         persons={this.state.persons}
                         showPersons={this.state.showPersons}
                         click={this.handleTogglePersons}/>
                {persons}
            </div>
        );
    }
}

export default App;
