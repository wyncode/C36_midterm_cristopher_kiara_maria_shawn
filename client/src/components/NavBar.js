import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 1300,
    background: 'linear-gradient(45deg, #E4FF01 30%, #FF0101 90%)'
  },
  search: {}
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // make navbar swap between pages
  // make search function work.
  return (
    <>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Box>
            <Link to="/">
              <BottomNavigationAction
                label="Home"
                value="Home"
                icon={<HomeIcon />}
              />
            </Link>
            <Link to="/about">
              <BottomNavigationAction
                label="About Us"
                value="About Us"
                icon={<InfoIcon />}
              />
            </Link>
            <Link to="/favorite-tacos">
              <BottomNavigationAction
                label="Favorite Taco Recipes"
                value="favorites Taco Recipes"
                icon={<FavoriteIcon />}
              />
            </Link>
          </Box>
          <Box>
            <form className={classes.search} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Search for Tacos!" />
            </form>
          </Box>
        </div>
      </BottomNavigation>
    </>
  );
}
