import React, {useState} from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

import MyForm from "./components/MyForm";
import MyGrid from "./components/MyGrid";
import { MyDialog } from './components/MyDialog';

function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'KenduReact'} />
          <Route exact path="/" component={Home} />
          <Route path = "/MyForm" component={MyForm} />
          <Route path = "/MyGrid" component={MyGrid} />
          <Route path = "/MyDialog" component={MyDialog} />

        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;
