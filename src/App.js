import React from 'react';
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

export default function App() {
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
            <li><button>Logout</button></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <AuthPage />
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
