// since we are runnign through webpack we can use es6
import 'babel-polyfill';
import express from 'express';
import renderApp from './helpers/renderer';
// import Routes from './client/routes';
// import { matchRoutes } from 'react-router-config';

const app = express();
   
// expose public for access
app.use(express.static('public'));

app.get('*', (req, res) => {
    // const components = matchRoutes(Routes, req.path);
    const html = renderApp(req);
    res.send(html);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})