import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { AppContext } from '../context/AppContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import logo from '../assets/orange_and_white_corporate_social_media_post.png';

const SearchTacos = () => {
  const history = useHistory();
  const context = useContext(AppContext);
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    if (query === '') {
      void 0;
    } else {
      setLoading(true);
      e.preventDefault();
      const result = await axios.get(`/api/recipes/${query}`);
      setLoading(false);
      setApiData(result.data);
      // make axios get request to backend
      console.log(result.data);
      setQuery('');
    }
  };

  const onRecipeClick = recipe => {
    context.setSelectedRecipe(recipe);
    history.push('/recipes');
  };

  const HandleChange = event => {
    setQuery(event.target.value);
  };

  const useStyles = makeStyles(theme => ({
    cards: {
      maxWidth: 350,
      backgroundColor: '#e0e0e0'
    },
    search: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(10),
      width: 750
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#FF0101',
      color: '#FFFFFF',
      height: '200'
    },
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    mainLogo: {
      display: 'flex',
      justifyContent: 'center',
      height: 350
    }
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.mainLogo}>
        <img src={logo} alt={'logo'} />
      </div>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <TextField
          onChange={HandleChange}
          className={classes.search}
          value={query}
          id="outlined-basic"
          label="Look for Taco recipie's here!"
          variant="outlined"
        />
        <Button
          type="submit"
          style={{ height: '50px', width: '100px' }}
          className={classes.button}
          variant="contained"
        >
          Search
        </Button>
      </form>
      {loading ? (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      ) : (
        <div className="cards">
          {apiData.length ? (
            apiData.map(item => {
              return (
                <Card className={classes.cards}>
                  <CardActionArea>
                    <CardMedia
                      style={{
                        height: '200px',
                        width: '400px'
                      }}
                      className={classes.cards}
                      image={item.recipe.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {item.recipe.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.recipe.healthLabels.join(', ')}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => onRecipeClick(item)}
                      size="small"
                      color="primary"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          ) : (
            <h1> </h1>
          )}
        </div>
      )}
    </>
  );
};

export default SearchTacos;

// adding a neat background image
// search bar right in the middle
// taco of the day
// export default Home;
