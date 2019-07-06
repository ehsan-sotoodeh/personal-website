import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SnippetPage from './Pages/SnippetPage'
import Page404 from './Pages/Page404'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/snippet/:snippetId" component={SnippetPage}/>
                <Route  component={Page404}/>
              </Switch>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
