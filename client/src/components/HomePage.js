import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import axios from 'axios';

const SearchTacos = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axios.get(`/api/recipes/${query}`);
    setApiData(result.data);
    // make axios get request to backend
    setQuery('');
  };

  const HandleChange = event => {
    setQuery(event.target.value);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100',
          justifyContent: 'center',
          marginTop: '15rem'
        }}
      >
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <Input
            onChange={HandleChange}
            value={query}
            placeholder="Look for Taco's Here!"
            inputProps={{ 'aria-label': 'description' }}
          />
        </form>
      </div>
      {apiData.length ? (
        apiData.map(recipe => {
          return <p>{recipe.recipe.label}</p>;
        })
      ) : (
        <h1>Search now!</h1>
      )}
    </div>
  );
};

export default SearchTacos;

// adding a neat background image
// search bar right in the middle
// taco of the day
// export default Home;
