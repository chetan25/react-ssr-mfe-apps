import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  cardWrapper: {
    margin: '2rem'
  },
}));

const Home = () => {
  const classes = useStyles();
    return <article className={classes.cardWrapper}>
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Remote Home App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This is a remote home app, that is loaded at runtime. It is served from 'http://localhost:3002/'
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </article> 
}

export default Home;