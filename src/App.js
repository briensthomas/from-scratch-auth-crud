import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AuthPage from './AuthPage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';

import { logout } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">List Page</Link>
            </li>
            <li><button onClick={handleLogout}>Logout Button</button></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <AuthPage setUser={setUser} />
          </Route>
          <Route path="/ListPage">
            <ListPage />
          </Route>
          <Route path="/DetailPage">
            <DetailPage />
          </Route>
          <Route path="/CreatePage">
            <CreatePage />
          </Route>
          <Route path="/UpdatePage">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
