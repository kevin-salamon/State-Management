import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Table from './components/Table/Table';
import Chart from './components/Chart/Chart';
import { Provider } from 'react-redux';

import store from './store';

function App() { 
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <React.Fragment>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/table" component={Table} />
            <Route path="/chart" component={Chart} />
          </Switch>
        </Provider>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
