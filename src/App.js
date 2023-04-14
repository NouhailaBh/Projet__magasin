
import React,{ Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Crud from './components/Crud';

class App extends Component {
render(){
    return (
        //regrouper la liste l'enfants  <Route exact path="/" element={<ProductList/>} />
        <React.Fragment>
          <Navbar/>
            <Routes>
            <Route exact path="/modifier" element={<Crud/>} />
              <Route exact path="/" element={<ProductList/>} />
              <Route  path="/Details" element={<Details/>} />
              <Route  element={<Default/>} />
            </Routes>
        </React.Fragment>
  );
}
}
export default App;
