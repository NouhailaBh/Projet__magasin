import React,{Component} from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext =React.createContext();
//Provider
//consumer 

 class ProductProvider extends Component{
    state ={
        products :storeProducts,
        detailProduct:detailProduct,
    };
   
//pour afficher detail de chaque produit selon son id 
    getItem =(id) =>{
        const product =this.state.products.find(item =>item.id ===id);
        return product;
    };
   //changer detail
    handleDetail = (id) =>{
        const product =this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        });
    };
   
    render(){
        return (
            <ProductContext.Provider 
            value={{
               ...this.state,
               handleDetail:this.handleDetail,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer =ProductContext.Consumer;
export {ProductProvider,ProductConsumer};