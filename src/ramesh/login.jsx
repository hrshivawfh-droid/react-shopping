import { useEffect, useState } from "react"

export function DataBinding() {
    const[price, setPrice]= useState(4000.44);
    useEffect(()=> {
        setPrice(22);
    },[])
    return(
        <div className="container-fluid">
            Price {price}
        </div>
    )
}    