import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){   super(props);   this.state = {...} }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }
    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngreedients = {
            ...this.state.ingredients
        };

        updateIngreedients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({totalPrice: newPrice, ingredients: updateIngreedients});

        this.updatePurchaseState(updateIngreedients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngreedients = {
            ...this.state.ingredients
        };

        updateIngreedients[type] = updateCount;

        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction

        this.setState({totalPrice: newPrice, ingredients: updateIngreedients});

        this.updatePurchaseState(updateIngreedients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };  

        // for (let key in disabledInfo){
        //     disabledInfo[key] = disabledInfo[key] <=  0
        // }

        Object.keys(disabledInfo).forEach((key) => {
            disabledInfo[key] = disabledInfo[key] <=  0
        });


        return (<>
         <Burger ingredients={this.state.ingredients}/> 
         <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler} 
            disabled={disabledInfo}  
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
        />
        </>);
    }
}

export default BurgerBuilder
