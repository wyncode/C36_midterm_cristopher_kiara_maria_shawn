import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Box } from '@material-ui/core';

const TacoRecipes = () => {
  const context = useContext(AppContext);
  if (!context.selectedRecipe.recipe) return <Redirect to="/" />;

  return (
    <>
      <div>
        <h1 className="recipeLabel">{context.selectedRecipe.recipe.label}</h1>
      </div>
      <div>
        <p className="picture">
          <img
            src={context.selectedRecipe.recipe.image}
            alt={context.selectedRecipe.recipe.label}
          />
        </p>
      </div>
      <div className="servingSize">
        <h3> Serving Size: {context.selectedRecipe.recipe.yield}</h3>
      </div>
      <ul className="ingredients">
        {context.selectedRecipe.recipe.ingredientLines &&
          context.selectedRecipe.recipe.ingredientLines.map(item => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
      <div className="recipeDetails">
        <div className="healthLabel">
          <Box>
            <h1>Health Labels: </h1>
            {context.selectedRecipe.recipe.healthLabels &&
              context.selectedRecipe.recipe.healthLabels.map(item => {
                return <h3 key={item}>{item}</h3>;
              })}
          </Box>
        </div>
        <Box className="cautions">
          <h1>Cautions: </h1>
          {context.selectedRecipe.recipe.cautions &&
            context.selectedRecipe.recipe.cautions.map(item => {
              return <h3 key={item}>{item}</h3>;
            })}
        </Box>
        <div>
          <h2 className="calories">
            {' '}
            calories: {context.selectedRecipe.recipe.calories.toFixed(0)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default TacoRecipes;
