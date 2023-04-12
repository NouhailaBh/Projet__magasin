import React,{Component} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default class Navbar extends Component{
render(){
    return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark ">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">
                        Magasin éléctroménager
                       </Link>
                    </li>

                </ul>
            </NavWrapper>
            );   
        }
}

const NavWrapper =styled.nav`
background: var(--mainRed);
.nav-link{
color:var(--mainWhite)!important;
font-size:1.3rem;
text-transform:capitalize !important;
}
`;


         