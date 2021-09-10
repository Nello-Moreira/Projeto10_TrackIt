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
import TodaysHabitsPercentage from './contexts/TodaysHabitsPercentage';

export default function App() {
  const [user, setUser] = useState({});
  const [habitsPercentage, setHabitsPercentage] = useState({
    done: 0,
    total: 0,
    getPercentage: (done, total) => total === 0 ? 0 : (done / total * 100)
  });

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
          <TodaysHabitsPercentage.Provider value={{ habitsPercentage, setHabitsPercentage }}>
            <Route exact path={routes.habits}>
              <Habits />
            </Route>

            <Route exact path={routes.today}>
              <Today />
            </Route>

            <Route exact path={routes.history}>
              <History />
            </Route>
          </TodaysHabitsPercentage.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}
