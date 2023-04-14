import {React, useState } from "react";
import { storeProducts} from "../data";
import '../App.css';

function Crud(){
    const [liste ,setListe]=useState(storeProducts)
    const [updateState, setUpdateState ] =useState(-1)
    return(
       <div className="crud">
        <div>
       <AddList setListe={setListe}/>
       <form onSubmit={handleChange}>
        <table>
            <tr>
                <th>Produit</th>
                <th>title</th>
                <th>Prix</th>
                <th>company</th>
                <th>Info</th>
                <th>Action</th>

            </tr>
            {
                liste.map((products) => (
                    updateState === products.id ? <EditList products={products} liste={liste} setListe={setListe}/>  :
                    <tr>
                       <td> <img src={products.img} alt="product" className="photo"></img></td> 
                       <td>{products.title}</td>
                       <td><span className="mr-1">$</span>{products.price}</td> 
                       <td>{products.company}</td> 
                       <td>{products.info}</td> 
                       <td>
                        <button className="edit" onClick={()=>{handleEdit(products.id)}}>Edit</button>
                        <button className="delete" type="button" onClick={() =>handleDelete(products.id)} >Delete</button>
                       </td>
                    </tr>
                )
                )            }      
              </table>
              </form>
              </div>
       </div>
        
    )
    function handleEdit(id){
            setUpdateState(id)
    }
    function handleDelete (id){
        const newlist =liste.filter((li) =>li.id !== id)
        setListe(newlist)
    }
    function handleChange(event){
        event.preventDefault()
        const img =event.target.elements.img.value
        const title =event.target.elements.title.value
        const company =event.target.elements.company.value
        const price =event.target.elements.price.value
        const info =event.target.elements.info.value
        const newlist =liste.map((li) => (
            li.id === updateState ?{...li , img:img,title:title, price:price, company:company,info:info} :li
        ))

        setListe(newlist)
        setUpdateState(-1)
    }
}

function EditList({products, liste,setListe}){
    function handInputImg(event){
        const value =event.target.value;
        const newlist =liste.map((li) => (
            li.id === products.id ?{...li , img:value} :li
        ))

        setListe(newlist)
        const title=event.target.title;
        const price=event.target.price;
        const company=event.target.company;
        const info=event.target.info;
    }
    function handInputTitle(event){
        const value =event.target.value;
        const newlist =liste.map((li) => (
            li.id === products.id ?{...li , title:value} :li
        ))

        setListe(newlist)
        const title=event.target.title;
        const price=event.target.price;
        const company=event.target.company;
        const info=event.target.info;
    }
    function handInputPrice(event){
        const value =event.target.value;
        const newlist =liste.map((li) => (
            li.id === products.id ?{...li , price:value} :li
        ))

        setListe(newlist)
        const title=event.target.title;
        const price=event.target.price;
        const company=event.target.company;
        const info=event.target.info;
    }
    function handInputCompany(event){
        const value =event.target.value;
        const newlist =liste.map((li) => (
            li.id === products.id ?{...li , company:value} :li
        ))

        setListe(newlist)
        const title=event.target.title;
        const price=event.target.price;
        const company=event.target.company;
        const info=event.target.info;
    }
    function handInputInfo(event){
        const value =event.target.value;
        const newlist =liste.map((li) => (
            li.id === products.id ?{...li , info:value} :li
        ))

        setListe(newlist)
        const title=event.target.title;
        const price=event.target.price;
        const company=event.target.company;
        const info=event.target.info;
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputImg} name="img" value={products.img}/></td>
            <td><input type="text" onChange={handInputTitle} name="title" value={products.title}/></td>
            <td><input type="text" onChange={handInputPrice} name="price"value={products.price}/></td>
            <td><input type="text" onChange={handInputCompany} name="company" value={products.company}/></td>
            <td><textarea type="text" onChange={handInputInfo} name="info" value={products.info}/></td>
            <td><button type="submit">modidfier</button></td>

       </tr>
    )
}
function AddList({setListe}){
    /*const titleRef =useRef()
    const priceRef =useRef()
    const imgRef =useRef()
    const companyRef =useRef()
    const infoRef =useRef()*/

    function handleSubmit(event){
        event.preventDefault();
        const img=event.target.elements.img.value;
        const title=event.target.elements.title.value;
        const price=event.target.elements.price.value;
        const company=event.target.elements.company.value;
        const info=event.target.elements.info.value;

        const newList ={
            id:9,
            title,
            img,
            price,
            company,
          info,
        }
        setListe((prevList) =>{
            return prevList.concat(newList)
        })
    }
    return(
        <form className="addForm" onSubmit={handleSubmit}>
             <input type="img" name="img" placeholder="Entrer Lien de l'image"/>
            <input type="text" name="title" placeholder="Entrer titre" />
            <input type="text" name="price" placeholder="Entrer le prix" />
            <input type="text" name="company" placeholder="Entrer company" />
            <textarea name="info" placeholder="Entrer les infos"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default Crud;