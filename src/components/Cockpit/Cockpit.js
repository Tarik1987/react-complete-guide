import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() =>{
            alert('Data saved');
        },1000)
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p>{props.title}</p>
            <p className = {assignedClasses.join(' ')}>This is realy working!</p>
            <button 
                className = {btnClass} 
                onClick={props.clicked}>
            Toggle Persons
            </button> 
        </div>

    );
};

export default React.memo(cockpit);