import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './containers/Home';
import Post from './containers/Post';
import ContactUs from './containers/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={ContactUs} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;