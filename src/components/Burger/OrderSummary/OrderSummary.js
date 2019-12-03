import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    return (
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {Object.keys(props.ingredients)
                    .map(igKey => {
                        return (
                            <li key={igKey}>
                                <span style={{textTransform: 'capitalize'}}>
                                    {igKey}
                                </span> : {props.ingredients[igKey]}
                            </li>
                        );
                    })
                }
            </ul>
            <p><strong>Total price</strong>: {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                onClick={props.onCancel}>CANCEL</Button>
            <Button
                btnType="Success"
                onClick={props.onContinue}>CONTINUE</Button>
        </React.Fragment>
    );
};

export default OrderSummary;
