import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const SearchTacos = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axios.get(`/api/recipes/${query}`);
    setApiData(result.data);
    // make axios get request to backend
    console.log(result.data)
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
        apiData.map(item => {
          return(
            
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        style = {{ height: "200px", width:"200px"}}
          className={classes.media}
          image={item.recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.recipe.label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.recipe.healthLabels.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
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
  );
};

export default SearchTacos;

// adding a neat background image
// search bar right in the middle
// taco of the day
// export default Home;
