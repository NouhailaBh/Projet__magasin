import React,{ useState } from 'react';
import Title from './Title';
import '../App.css';
import {storeProducts} from '../data';
import { ProductConsumer } from "../context";
import Product from "./Product";
import * as Icon from 'react-bootstrap-icons';

function Appp(){
    const [query, setQuery] =useState("");
   // console.log(storeProducts.filter(product => product.company.toLowerCase().includes("h")));
    return(
        <React.Fragment>
            
        <div className="py-5">
            <div className="container"> 
            <Title name="Les" title="produits" />
               
           <div className='appp'>
           <input type="text" placeholder="chercher une marque"className='search' 
            onChange={(e) => setQuery(e.target.value)} />
             <Icon.Search/></div> 
            
             <div className="row">
            <ProductConsumer>
                        {value => {
                        return value.products.filter((product) => product.company.toLowerCase().includes(query)).map(product =>{
                        return <Product  key={product.id}  product={product}/>;
                        })
                        }
                        }
                    </ProductConsumer>
                    </div>
        </div> 
     </div>
   
           </React.Fragment>
           
      
    );
}
export default Appp;