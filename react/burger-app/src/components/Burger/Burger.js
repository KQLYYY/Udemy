import React from 'react'

import BurgerIngreedient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const burger = (props) => {
  const transformedIngreedients = Object.keys(props.ingredients).map(igKey =>{
    //console.log(Object.keys(props.ingredients))
    //console.log([...Array(props.ingredients[igKey])])
    return [...Array(props.ingredients[igKey])].map((_, i)=>{
       console.log(igKey+i)
      //console.log(igKey,i)
      return <BurgerIngreedient key={igKey+i} type={igKey}/>
    });
  });
  console.log(transformedIngreedients);
  return (
     <div className={classes.Burger}> 
      <BurgerIngreedient type="bread-top"/>
      {transformedIngreedients}
      <BurgerIngreedient type="bread-bottom"/>
     </div>
  );
};

export default burger;