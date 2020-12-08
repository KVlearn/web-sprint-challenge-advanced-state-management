import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducer';

// import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import App from "./components/App";

const AppwithRouter= withRouter(App)
const store=createStore(reducer,applyMiddleware(thunk,logger));

ReactDOM.render(
<Provider store={store}>
<Router>
    <AppwithRouter />
</Router>
</Provider>, document.getElementById("root"));
