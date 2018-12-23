import React from 'react'

import BurgerIngreedient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const burger = (props) => {
  let transformedIngreedients = Object.keys(props.ingredients).map(igKey =>{
    //console.log(Object.keys(props.ingredients))
    //console.log([...Array(props.ingredients[igKey])])
    return [...Array(props.ingredients[igKey])].map((_, i)=>{
      //  console.log(igKey+i)
      //console.log(igKey,i)
      return <BurgerIngreedient key={igKey+i} type={igKey}/>
    })
  })
  .reduce((arr, el) =>{
    return arr.concat(el)
  }, []);
  if (transformedIngreedients.length === 0) {
    transformedIngreedients = <p>Please start adding ingredients</p>
  }
  // console.log(transformedIngreedients);
  return (
     <div className={classes.Burger}> 
      <BurgerIngreedient type="bread-top"/>
      {transformedIngreedients}
      <BurgerIngreedient type="bread-bottom"/>
     </div>
  );
};

export default burger;