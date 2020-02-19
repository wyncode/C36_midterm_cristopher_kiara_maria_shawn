import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TacoRecipes = () => {
  const context = useContext(AppContext)
  if (!context.selectedRecipe.recipe) return <Redirect to="/" />
  
  return (
    <div>
      This is the recipe page
      <p>{context.selectedRecipe.recipe.label}</p>
    </div>
  )
}

export default TacoRecipes