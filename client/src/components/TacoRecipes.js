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
    <div>
      <p className="picture"><img src={context.selectedRecipe.recipe.image} alt={context.selectedRecipe.recipe.label} /></p>
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
    <div className="recipeDetails">
    <div className="healthLabel"> 
        <box>
    <p>Health Labels: </p>
      {context.selectedRecipe.recipe.healthLabels && context.selectedRecipe.recipe.healthLabels.map(
        (item, key) => {
            return <h6 key={key.text}>{item}</h6>
        })}
        </box>
    </div>
    <box className="cautions"> 
    <p>Cautions: </p>
    {context.selectedRecipe.recipe.cautions && context.selectedRecipe.recipe.cautions.map(
        (item, key) => {
            return <h6 key={key.text}>{item}</h6>
        })}
    </box>
    <div>
      <h2 className="calories"> calories: {context.selectedRecipe.recipe.calories.toFixed(0)}</h2>
    </div>
    </div>
  </>
  
  )
}

export default TacoRecipes