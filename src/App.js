import React from 'react';
import { Provider } from 'react-redux';

import generateStore from './redux/store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/login/login';
import Signup from './components/signup/signup';
import Uiuser from './components/ui/index';

const App = () => {

  const store = generateStore();

  return (
    <Provider store={store} className="container " >
      <Router>
        <div className="container mt-5">
          <Switch>

            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/">
              <Uiuser />
            </Route>

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
