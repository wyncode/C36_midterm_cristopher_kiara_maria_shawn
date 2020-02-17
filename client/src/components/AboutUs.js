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

const About = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      background: 'linear-gradient(45deg, #E4FF01 30%, #000000 90%)'
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="#"
          title="Cristopher Guerrero"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cristopher Guerrero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hello!
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
  );
};

export default About;
