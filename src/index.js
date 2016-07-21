import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from "react-router";

import ReduxToastr from 'react-redux-toastr'
import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';


import routes from './routes';
import reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,logger(),thunk)(createStore);

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


/*
<div class="toastr animated success icon-check-1"><div class="message-holder"><!-- react-text: 1024 --><!-- /react-text --><div class="message">Saved company information successfully !</div></div></div>
*/
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <Router history={browserHistory} routes={routes}>
        </Router>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
        />
      </div>
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.main-app'));
