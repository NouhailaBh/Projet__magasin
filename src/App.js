
import React,{ Component } from 'react';
//import {Switch,Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';


class App extends Component {
  render(){
  return (
    //regrouper la liste l'enfants
    <React.Fragment>
   <Navbar/>
   <Routes>
    <Route exact path="/" element={<ProductList/>} />
    <Route  path="/Details" element={<Details/>} />
    <Route  element={<Default/>} />
</Routes>

    </React.Fragment>
  );
}
}

export default App;
