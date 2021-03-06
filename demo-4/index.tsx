import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';

import * as styles from './index.less';

const App = () => <div className={styles['app-container']}>
  Hello React!
</div>;


ReactDom.render(<BrowserRouter>
  <div className={styles.nav}>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/about" exact>About</NavLink>
  </div>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={asyncComponent(() => import('./pages/About'))} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));