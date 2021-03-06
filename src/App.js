import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Table from './components/Table/Table';
import Chart from './components/Chart/Chart';
import { Provider } from 'react-redux';
import Header from './components/reusables/Header';

import store from './store';

function App() { 
  return (
    <Router>
      <React.Fragment>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/State-Management" component={Landing} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/chart" component={Chart} />
          </Switch>
        </Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
