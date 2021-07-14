import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/routes';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
// import serialize from 'serialize-javascript';

// assume this is set in another app and coming from a db or something
const CONTAINER_APP_BUNDLE_PATH = 'http://localhost:3001/bundle.js';
const HOME_APP_REMOTE_ENTRY_PATH = 'http://localhost:3002/remoteEntry.js';
const ABOUT_APP_REMOTE_ENTRY_PATH = 'http://localhost:3003/remoteEntry.js';

export default (req) => {
    // this is generated html
    const content = renderToString(
            <StaticRouter context={{}} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
    );
    
    const html = `
        <html>
           <head>
               <link rel="stylesheet" type="text/css" href="styles.css" />
           </head>
           <body>
                <script>
                   window.homeurl = 'http://localhost:3001'
                </script>
                <div id="root">
                   ${content}
                </div>
                <script src="bundle.js"></script>
                <script src="${HOME_APP_REMOTE_ENTRY_PATH}"></script>
                <script src="${ABOUT_APP_REMOTE_ENTRY_PATH}"></script>
                <script src="${CONTAINER_APP_BUNDLE_PATH}"></script>
           </body>
        </html>
    `;

    return html;
}