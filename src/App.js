import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Components/Landing';
import Table from './Components/Table';
import Chart from './Components/Chart';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/chart" component={Chart} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
