import React from "react";
import { useParams } from "react-router-dom";

function DetailProduct(){
    const param =useParams();
    console.log(param.id);
    return(
        <>
        <h1>DetailProduct {param.id}</h1>
        </>
    );
};

export default DetailProduct;