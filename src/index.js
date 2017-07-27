import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {Link, BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from './components/Explorer'
import Films from './components/Films'
import BaseLayout from './components/Layout'
import People from './components/People'
import Starships from './components/Starships'



ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={Explorer} />
    </Switch>
  </BaseLayout>
</BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
