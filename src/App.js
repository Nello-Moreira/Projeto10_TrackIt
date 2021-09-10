import './App.css';
import routes from './routes/routes';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Habits from './routes/Habits';
import Today from './routes/Today';
import History from './routes/History';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import HabitsContext from './contexts/HabitsContext';

export default function App() {
  const [user, setUser] = useState({});
  const [habits, setHabits] = useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path={routes.login}>
          <Login setUser={setUser} />
        </Route>

        <Route exact path={routes.signUp}>
          <SignUp />
        </Route>

        <UserContext.Provider value={{ user, setUser }}>
          <HabitsContext.Provider value={{ habits, setHabits }}>
            <Route exact path={routes.habits}>
              <Habits />
            </Route>

            <Route exact path={routes.today}>
              <Today />
            </Route>

            <Route exact path={routes.history}>
              <History />
            </Route>
          </HabitsContext.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}
