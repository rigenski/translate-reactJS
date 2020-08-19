import React from 'react';
import Navbar from './components/Navbar';
import Translate from './components/Translate'
import Rigen from "./Rigen"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
    <Route exact path="/">
      <Navbar />
    </Route>
    <Route path="/about">
      <Navbar />
      <Rigen />
    </Route>
    <Route path="/translate">
      <Navbar />
      <Translate textID="ID" textENG="ENG" textCL="CLEAR" />
    </Route>
  </BrowserRouter>
  );
}

export default App;
