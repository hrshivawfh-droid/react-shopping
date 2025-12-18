import { useEffect, useState } from "react";

export function AjaxDemo() {

    const [product,setProduct] = useState({title:"",price:0,rating:{rate:0,reviews:0,ratings:0},offers:[],image:""});

    function LoadData() {
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }
    useEffect(()=>{
    LoadData();
},[])



return(
    <div className="container-fluid ">
            <h1  className="text-center">ajaxdemo http request</h1>
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" alt="" />
                </div>
        
                <div className="col-9" >
                    <div className="h4">
                        {product.title}
                    </div>

                    <div className="mt-3">
                    <div className="badge bg-success rounded">
                        {product.rating.rate} <span className="bi bi-star-fill"></span>
                    </div>
                
                    <span className="fw-bold text-secondary">{product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()}Reviews</span>
                </div>
                <div className="mt-4 h3">
                    {product.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}
                </div>
                    <div>
                        <ul className="list-unstyled">
                        {
                            product.offers.map(offer => <li className="bi bi-tag fill text-success my-3" key = {offer}> <span className="text-secondary">{offer}</span></li>)
                        }
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
)
}



export function AjaxDemo1() {

    const [product,setProduct] = useState({title:"",price:0,rating:{rate:0,reviews:0,ratings:0},offers:[],image:""});
    function LoadData() {
        fetch(('product.json'))
        .then(response => response.json())
        .then(product => {
            setProduct(product);
        })
    }


    useEffect(()=>{
    LoadData();
},[])



return(
    <div className="container-fluid ">
            <h1  className="text-center">ajaxdemo fetch request</h1>
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" alt="" />
                </div>
        
                <div className="col-9" >
                    <div className="h4">
                        {product.title}
                    </div>

                    <div className="mt-3">
                    <div className="badge bg-success rounded">
                        {product.rating.rate} <span className="bi bi-star-fill"></span>
                    </div>
                
                    <span className="fw-bold text-secondary">{product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()}Reviews</span>
                </div>
                <div className="mt-4 h3">
                    {product.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}
                </div>
                    <div>
                        <ul className="list-unstyled">
                        {
                            product.offers.map(offer => <li className="bi bi-tag fill text-success my-3" key = {offer}> <span className="text-secondary">{offer}</span></li>)
                        }
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
)



}




