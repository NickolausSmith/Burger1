import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';
import classes from './Checkoutsummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            clicked
            btnType="Danger"
            clicked={props.checkoutCancelled}> CANCEL </Button>
            <Button
            clicked
             btnType="Success"
             clicked={props.checkoutContinued}> CONTINUE </Button>
            
        </div>
    )

}

export default checkoutSummary;