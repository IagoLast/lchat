import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//
import {BrowserRouter,  Route} from 'react-router-dom'
import Login from './routes/login/login.view';
import Index from './routes/index/index.view';



window.gapi.load('auth2', () => {
  ReactDOM.render(
      <BrowserRouter> 
      <div>
        <Route exact path="/index" component={Index} />
        <Route exact path="/login" component={Login} />
      </div>
      </BrowserRouter>,
    document.getElementById('root')
  );
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
