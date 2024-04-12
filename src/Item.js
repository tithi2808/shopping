import {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';



function Item()
{
    const location=useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>
{
    fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>
{
    result.json().then((data1)=>
{
    setdata(data1)
})
})
},[])
    return(
        <div>
            <h1>{data.pid}</h1>
        </div>
    )
}
export default Item