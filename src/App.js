import './App.css';
import routes from './routes/routes';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Habits from './routes/Habits';
import Today from './routes/Today';
import History from './routes/History';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState('');

  console.log({ user });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={routes.login}>
            <Login setUser={setUser} />
          </Route>

          <Route exact path={routes.signUp}>
            <SignUp />
          </Route>

          <Route exact path={routes.habits}>
            <Habits />
          </Route>

          <Route exact path={routes.today}>
            <Today />
          </Route>

          <Route exact path={routes.history}>
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
