import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/css/App.css';
import { SidebarList } from './lists';
import QuestionContainer from './containers/QuestionContainer';

function App() {
  const sideBarListComponents = SidebarList.map((item, index) => (
    <li key={`sidebar-item${item.id}`}>
      <Link to={`/question/${index + 1}`}>{item.name}</Link>
    </li>
  ));

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <ul>{sideBarListComponents}</ul>
        </div>
        <main>
          <Switch>
            <Route path="/question/:questionNumber">
              <QuestionContainer />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
