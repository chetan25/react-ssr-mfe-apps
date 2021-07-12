import React, {Suspense, lazy }  from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const HomeApp = lazy(() => import('./HomwApp'));

const Container = () => {
    return  <Suspense fallback='loading....'>
      <div>
        <h2>Hello From Remote Container Page</h2>
        <div>
            <Typography
                variant="h6"
                color="inherit"
                noWrap
                // component={RouterLink}
                // to="/home/about"
              >
                Container
            </Typography>
            <HomeApp/>
          </div>
      </div>
    </Suspense>
}

export default Container;