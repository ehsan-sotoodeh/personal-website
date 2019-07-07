import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import ProjectPage from './Pages/ProjectPage'
import Page404 from './Pages/Page404'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/blog" component={BlogPage} exact />
                <Route path="/project/:projectId" component={ProjectPage}/>
                <Route  component={Page404}/>
              </Switch>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
