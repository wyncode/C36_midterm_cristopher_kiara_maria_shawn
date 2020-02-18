import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box, TableRow } from '@material-ui/core';
import { spacing } from '@material-ui/system';


const About = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 375,
      background: 'linear-gradient(45deg, #249EDA 30%, #000000 90%)'
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    media: {
      height: 375,
      width: 375,
    }
  });

  const classes = useStyles();
  return (
<div 
className={classes.cardContainer}>
    <Box   
      paddingLeft={23}
      paddingTop={7}
      >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('./Portraits/GuerreroCristopher.jpg')}
          title="Cristopher Guerrero"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cristopher Guerrero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Hello! */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://github.com/BlakeCG">
          <Button size="small" color="primary">
            GitHub
          </Button>
        </a>
      </CardActions>
    </Card>
    </Box>

    <Box  
    paddingLeft={5}
    paddingTop={7}  
      >
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={require('./Portraits/MarcotteShawn.jpg')}
    title="Shawn Marcotte"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    Shawn Marcotte
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {/* Hello! */}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <a href="https://github.com/shawnpmarcotte">
    <Button size="small" color="primary">
      GitHub
    </Button>
  </a>
</CardActions>
</Card>
</Box>

<Box
paddingLeft={23}
paddingTop={8}  
paddingBottom={7}
>
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={require('./Portraits/BecklesMaria.jpg')}
    title="Maria Beckles"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    Maria Beckles
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {/* Hello! */}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <a href="https://github.com/mj305">
    <Button size="small" color="primary">
      GitHub
    </Button>
  </a>
</CardActions>
</Card>
</Box>

<Box
paddingLeft={5}
paddingTop={8}
paddingBottom={7}
>
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={require('./Portraits/PoitevienKiara.jpg')}
    title="Kiara Poitevien"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    Kiara Poitevien
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {/* Hello! */}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <a href="https://github.com/kpoitevien">
    <Button size="small" color="primary">
      GitHub
    </Button>
  </a>
</CardActions>
</Card>
</Box>

</div>
  );
};

export default About;