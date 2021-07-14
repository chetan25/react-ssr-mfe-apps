  
import React, {lazy, Suspense} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// import { MemoryHistory } from 'history';
import { useHistory } from 'react-router-dom'; 

// import About from './About';
import Container from './Container';
const HomeApp = lazy(() => import('./HomwApp'));
const AboutApp = lazy(() => import('./AboutApp'));

// to avoid name collision in production, we would prefix class names generated
const generateClassName = createGenerateClassName({
  productionPrefix: 'mrk'
});


const ContainerApp = () => {
  const localHistory = useHistory();
  console.log(localHistory, 'localHistory');

  return (
    <Suspense fallback='loading....'>
       <StylesProvider generateClassName={generateClassName}>
           <Router>
              <div><Container /></div>
              <Switch>
                  <Route exact path='/about' component={AboutApp} />
                  <Route exact path='/' component={HomeApp} />
              </Switch>
           </Router>
       </StylesProvider>
    </Suspense>
  );
};

export default ContainerApp;