import { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  

function Electronic()
{
    const[apidata,setdata]=useState([])
 useEffect(()=>{
    getData()
 },[])
 async function getData()
 {
    var result=await fetch("https://fakestoreapi.com/products/category/electronics")
// console.log(result) 
var data=await result.json()
setdata(data)
console.log(data)
}   
return(
    <div>
        <br></br>
        
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard className='h-100'>
          <center> <MDBCardImage
            src={item.image} style={{width:"100px", height:"150px"}}
            alt='...'
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80}Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> 
        )
      }
    </MDBRow>
    </div>
)
   
    
}
export default Electronic