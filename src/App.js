import React, {useState} from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customers";
import { MyDialog } from './components/MyDialog';
import GridTest from './components/GridTest';

function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'KenduReact'} />
          <Route exact path="/" component={Home} />
          <Route path = "/AddCustomer" component={AddCustomer} />
          <Route path = "/Customers" component={Customers} />
          <Route path = "/MyDialog" component={MyDialog} />
          <Route path = "/GridTest" component={GridTest} />

        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;
