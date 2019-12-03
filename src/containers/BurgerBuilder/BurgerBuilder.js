import React, { Component } from 'react';

import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasingMode: false,
		loadingMode: false
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			})
			.reduce((acc, el) => {
				return acc + el;
			}, 0);

		this.setState({
			purchasable: sum > 0
		});
	}

	addIngredientHandler = (type) => {
		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] + 1
		};

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
		})

		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const removingIsEnabled = this.state.ingredients[type] !== 0;

		if (!removingIsEnabled) {
			return;
		}

		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] - 1
		};

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
		})

		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({
			purchasingMode: true
		})
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasingMode: false
		})
	}

	purchaseContinueHandler = () => {
		// alert('You continue');
		this.setState({ loadingMode: true });

		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Yuliya',
				address: {
					street: 'TestStreet',
					zipcode: '41351',
					country: 'Belarus'
				},
				email: 'test!test.com'
			},
			deliveryMethod: 'fastest'
		};

		axios.post('/orders.json', order)
			.then(response => {
				this.setState({ loadingMode: false, purchasingMode: false });
			})
			.catch(error => {
				this.setState({ loadingMode: false, purchasingMode: false });
			});
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <=0;
		}
		return (
			<React.Fragment>
				<Modal isVisible={this.state.purchasingMode} onModalClose={this.purchaseCancelHandler}>
					{this.state.loadingMode && (
						<Spinner />
					)}

					{!this.state.loadingMode && (
						<OrderSummary
							ingredients={this.state.ingredients}
							price={this.state.totalPrice}
							onCancel={this.purchaseCancelHandler}
							onContinue={this.purchaseContinueHandler} />
					)}
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					onPurchase={this.purchaseHandler}
					onAddIngredient={this.addIngredientHandler}
					onRemoveIngredient={this.removeIngredientHandler}
					disabled={disabledInfo} />
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
