import './home.css';
import React , { useEffect, useState } from 'react';
import axios from 'axios';  



export const Home = ( )=>{
const[Products,setProducts]=useState([])
const  call = async ( )=>{
    return   await axios.get(`https://assessment-edvora.herokuapp.com`) 
}

useEffect (()=>{
call().then( (Response) =>{
    setProducts(Response.data)
    console.log(Products)
})
.catch( (er)=>{
    console.log(er)
})
},[ ])




//    const [cards,setCards] = useState("")
//     { for ( let i=0 ; i<Products.length  ;  i++) (
//          setCards(`
//          <div className=' holder '>
//          <img className='' src=${Products[i].image}/>
//          <div  className='col-6'>mmmm</div>
//         </div>   
//          `)
//     )
//     document.getElementById("list-one").innerHTML = cards
// }


// {Products.map(
//     (product)=>(
//            <div className=' holder '>
//         //         <img className='pic col-4' />
//         //         <div  className='col-6'>mmmm</div>
//         //   </div>      
// ))}  
 return(

        <>                     
                    

        <div className='container-fluid'>
              <div className='row'> 
                    <div className='menu col-md-2 col-sm-12 '>
                         <h4 className='filters'>Filters</h4>
                         <hr className='hr1' />
                        <div>
                              <div className="dropdown menu1">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Products
                                   </button>
                                 <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {Products.map(
                                        (product)=>(
                                            <button className="dropdown-item" type="button" > {product.product_name}</button>
                                        )
                                    )}
                                 </div>
                              </div>
                              <div className="dropdown menu2">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Dropdown
                                   </button>
                                 <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                 {Products.map(
                                        (product)=>(
                                            <button className="dropdown-item" type="button"   > {product.address.state}</button>
                                        )
                                    )}
                                 </div>
                              </div>
                              <div className="dropdown menu3">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Dropdown
                                   </button>
                                 <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                 {Products.map(
                                        (product)=>(
                                            <button className="dropdown-item" type="button"   > {product.address.city}</button>
                                        )
                                    )}
                                 </div>
                              </div>
                        </div>
                    </div>
                    <div className='list col-md-10 col-sm-12 '>
                                <div className="info">
                                  <h1 style={{color: "rgba(255, 255, 255, 0.87)"}}>Edvora</h1>
                                  <h3 className="mt-3" style={{color: "rgba(255, 255, 255, 0.5)"}}>Products</h3>
                                  <h3 className="mt-3 pName"  style={{color: "rgba(255, 255, 255, 1)"}}>Product Name</h3>
                                  <hr className='hr2' />
                                </div>
                              
                                <div className='row' id="list-one">
                                
                                      
                                      <div className='holder "one mt-3  col-lg-3 col-md-4 col-sm-12" '>
                                   <div className='top row'>
                                        <div className='col-3  img' >kkkkk </div>
                                             <div  className='col-7 data ml-2 mt-2'>
                                                 <h6>Product Name</h6>
                                                 <h6>Brand Name</h6>
                                                 <h6>$ 55.5</h6>
                                             </div>
                                    </div>
                                       <div className='row '>
                                            <div className='col-2 bottom'><h6>location</h6></div>
                                             <div className='col-8 date'><h6 >Date:20/2/2022</h6></div>
                                             <h5 className='location' >jjjhhh</h5>
                                       </div>
                                </div>
                                     
                                    
                                     {/* ///////////// */}
                                     
                                  </div>
                    
                                <h3 className="mt-4 pName" style={{color:"rgba(255, 255, 255, 1)"}}>Product Name</h3>
                                  <hr className='hr2' />
                                 <div className='list-two row'>
                                      <div className="one"></div>
                                      <div className="one"></div>
                                      <div className="one"></div>
                                      <div className="one"></div>
                                 </div>
                         
                    </div>
             </div>
       </div>
    </>
    

    )
}