import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbars/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Provider } from './components/context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';
function App() {
let name = "mahmoud nassih";
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about/:id/:name" component={About} />
              <Route  component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
