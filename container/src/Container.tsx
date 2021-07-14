import React  from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   linkItem: {
    paddingRight: '1rem'
   }
}));


const Container = () => {
    const classes = useStyles();
     return <div>
            <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.linkItem}
                component={RouterLink}
                to="/"
              >
                Home
            </Typography>
            <Typography
                variant="h6"
                className={classes.linkItem}
                color="inherit"
                noWrap
                component={RouterLink}
                to="/about"
              >
                About
            </Typography>
      </div>
}

export default Container;