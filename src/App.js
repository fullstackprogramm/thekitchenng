import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/home/home.component'
import Signin from './components/signin/signin.component'
import Menu from './components/menu/menu.component'
import Contact from './components/contact/contact.component'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/menu' component={Menu} />
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
