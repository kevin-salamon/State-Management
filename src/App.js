import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Components/Landing';
import Table from './Components/Table';
import Chart from './Components/Chart/Chart';
import { Provider } from 'react-redux';

import store from './store';

function App() {  // I believe the provider is placed correctly here, but I could be wrong.
  return (
    <Router>
      <React.Fragment>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/chart" component={Chart} />
          </Switch>
        </Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
