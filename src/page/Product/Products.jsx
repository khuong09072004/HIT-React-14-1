import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Products(){
    return(
        <>
        <h1> Link Products</h1>

        <ul>
            <li><Link to={"/products/1"}>product1</Link></li>
            <li><Link to={"/products/2"}>product2</Link></li>
            <li><Link to={"/products/3"}>product3</Link></li>
            <li><Link to={"/products/4"}>product4</Link></li>
            <li><Link to={"/products/5"}>product5</Link></li>
            <li><Link to={"/products/6"}>product6</Link></li>
        </ul>

        <Outlet/>


        </>
    )
}

export default Products;