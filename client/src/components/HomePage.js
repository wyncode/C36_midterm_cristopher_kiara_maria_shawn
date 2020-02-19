import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { AppContext } from '../context/AppContext';


const SearchTacos = () => {
  const history = useHistory();
  const context = useContext(AppContext)
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [userSelection, setUserSelection] = useState(0);

 
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axios.get(`/api/recipes/${query}`);
    setApiData(result.data);
    // make axios get request to backend
    console.log(result.data)
    setQuery('');
  };

  const onRecipeClick = recipe => {
    context.setSelectedRecipe(recipe)
    history.push("/recipes")
  }

  const HandleChange = event => {
    setQuery(event.target.value);
  };

  const useStyles = makeStyles(theme => ({
    cards: {
      maxWidth: 350,
      backgroundColor: '#e0e0e0',
    },
    search: {
      display: 'flex',
      justifyContent: "center",
      border: "1px solid black",
      margin: theme.spacing(1),
      margin: 150

    }
    }

));

  const classes = useStyles();

  return (
    <>
  
        <form
          onSubmit={handleSubmit}
          className={classes.search}
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
        <div className="cards">
      {apiData.length ? (
        apiData.map(item => {
          return(
           
            <Card className={classes.cards}>
              <CardActionArea>
                <CardMedia
                  style = {{ 
                  height: "200px", 
                  width:"400px",
                }}
                className={classes.cards}
                image={item.recipe.image}
                title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography disableTypography variant="h5" component="h2">
                    {item.recipe.label}
                  </Typography>
                  <Typography disableTypography='false' variant="body2" color="textSecondary" component="p">
                    {item.recipe.healthLabels.join(", ")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button onClick={() => onRecipeClick(item)} size="small" color="primary">

                  Learn More
                </Button>
              </CardActions>
            </Card>
          
        ) 
      })
      ) : (
        <h1>Search now!</h1>
      )}
      </div>
    </>
  );
  
  
};

export default SearchTacos;

// adding a neat background image
// search bar right in the middle
// taco of the day
// export default Home;
