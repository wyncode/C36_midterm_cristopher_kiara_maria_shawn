import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Box } from '@material-ui/core';

const TacoRecipes = () => {
  const context = useContext(AppContext)
  if (!context.selectedRecipe.recipe) return <Redirect to="/" />
  
  return (
  <>
    <div>
      <h1 className="recipeLabel">{context.selectedRecipe.recipe.label}</h1>
    </div>
    <div className="picture">
      <p><img src={context.selectedRecipe.recipe.image} alt={context.selectedRecipe.recipe.label} /></p>
    </div>
    <div className="servingSize">
      <h3> Serving Size: {context.selectedRecipe.recipe.yield}</h3>
    </div>
    <ul className="ingredients">
      {context.selectedRecipe.recipe.ingredientLines && context.selectedRecipe.recipe.ingredientLines.map(
        (item, key) => {
            return <li key={key.text}>{item}</li>
        })}
    </ul>
    <box className='healthLabel'>
      {context.selectedRecipe.recipe.healthLabels && context.selectedRecipe.recipe.healthLabels.map(
        (item, key) => {
            return <h6 key={key.text}>{item}</h6>
        })}
    </box>
    <div className='cautions'>
      {context.selectedRecipe.recipe.cautions && context.selectedRecipe.recipe.cautions.map(
        (item, key) => {
            return <h6 key={key.text}>{item}</h6>
        })}
    </div>
    <div className='calories'>
      <h6> calories: {context.selectedRecipe.recipe.calories.toFixed(2)}</h6>
    </div>
  </>
  )
}

export default TacoRecipes