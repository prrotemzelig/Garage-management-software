import React from 'react';
import classes from './Card.module.css';

var temp=0;

const cardSearch = ( props ) => {
    const number=props.data;
    //console.log(number);
    if(props.cardData.licenseNumber===number){
        const cardDetails = []; // this is a code to transform each of my open card into an array of all the open cards.
        temp=1;
        for ( let fieldName in props.cardData ) {
            cardDetails.push( //the object we are pushing into this array
            {
                name: fieldName, //store the name of the field 
                data: props.cardData[fieldName] // store the value of the field ( what the user entered)
            }
            );
        }
        //after we pushed into the cards array, 
    //we can map my cards to text basically in the return ->  <p> {cardsDetailsOutput}</p>
    const cardsDetailsOutput = cardDetails.map(ig => {
        // here we return some JSX
        //we can use in ig.name as a unique key because it is unique here
        return <span 
            style={{
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
                color: 'black'
                }}
            key={ig.name}>{ig.name} ({ig.data})</span>;
    });

    
    return (
        <div className={classes.Card} >
            <p style={{color:'black'}}>פרטי הרכב </p>
            <p> {cardsDetailsOutput}</p>
        </div>
    );
    }
    else{
        return (
            <div></div>
        );
    }
};
export default cardSearch;