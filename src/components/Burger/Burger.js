import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, idx) => {
                return <BurgerIngredient key={igKey + idx} type={igKey} />
            });
        })
        .reduce((acc, el) => {
            return [...acc, ...el];
        }, []);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient
                type="bread-top" />

            {!!transformedIngredients.length && transformedIngredients}
            
            {!transformedIngredients.length && (
                <p>Please, start adding ingredients!</p>
            )}

            <BurgerIngredient
                type="bread-bottom" />
        </div>
    );
};

export default Burger;
