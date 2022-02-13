// import './home.css';
// import React , { useEffect, useState } from 'react';
// import axios from 'axios';  

// export const Home = ( )=>{
// const[Products,setProducts]=useState([])
// const  call = async ( )=>{
//     return   await axios.get(`https://assessment-edvora.herokuapp.com`) 
// }
// useEffect (()=>{
// call().then( (Response) =>{
//     setProducts(Response.data)
// })
// .catch( (er)=>{
//     console.log(er)
// })
// },[ ])

// const showStates = (e)=>{
//  let selected_item = e.target.value
// //  Products.map(
// //     (product)=>( product.product_name == selected_item && 
// //     // document.getElementById("state").innerHTML ("kkkkkkk")
// //     console.log(product.address.state) 
// //  )) 
// }

// const showCites = (e)=>{
//  let selected_item = e.target.value
// //   Products.map(
// //     (product)=>( product.address.state == selected_item && 
// //     // document.getElementById("state").innerHTML 
// //     console.log(product.address.city) 
// //  )) 
// }
//  return(
//         <>                     
//         <div className='container-fluid'>
//               <div className='row'> 
//                     <div className='menu col-md-2 col-sm-12 '>
//                          <h4 className='filters'>Filters</h4>
//                          <hr className='hr1' />
//                         <div>
//                               <div className="dropdown menu1">
//                                   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                       Products
//                                    </button>
//                                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                                     {Products.map(
//                                         (product)=>(
//                                             <button className="dropdown-item" type="button"  onClick={showStates}  value={product.product_name}> {product.product_name}</button>
//                                         )
//                                     )}
//                                  </div>
//                               </div>
//                               <div className="dropdown menu2">
//                                   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                       State
//                                    </button>
//                                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                                  {Products.map(
//                                         (product)=>(
//                                             <button className="dropdown-item" type="button" id='state'  onClick={showCites} value={product.address.state}> {product.address.state}</button>
//                                         )
//                                     )}
//                                  </div>
//                               </div>
//                               <div className="dropdown menu3">
//                                   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                       City
//                                    </button>
//                                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                                  {Products.map(
//                                         (product)=>(
//                                             <button className="dropdown-item" type="button"   id='city'> {product.address.city}</button>
//                                         )
//                                     )}
//                                  </div>
//                               </div>
//                         </div>
//                     </div>
//                     <div className='list col-md-10 col-sm-12 '>
//                                 <div className="info">
//                                   <h1 style={{color: "rgba(255, 255, 255, 0.87)"}} className="ml-2">Edvora</h1>
//                                   <h3 className="mt-3 ml-2" style={{color: "rgba(255, 255, 255, 0.5)"}}>Products</h3>
//                                   <h3 className="mt-3 pName ml-2"  style={{color: "rgba(255, 255, 255, 1)"}}>Microsoft inc</h3>
//                                   <hr className='hr2' />
//                                 </div>
                              
//                                 <div className='row' id="list-one">
//                                        {/* /////////////////// */}
//                              {Products.map(
//                              (product)=>(    product.product_name == "Microsoft inc" && 
//                                       <div className='holder one mt-3  col-lg-3 col-md-4 col-sm-12 '>
//                                    <div className='top row'>
//                                         <div className='col-4  img' > <img src={product.image} alt="error 404"/> </div>
//                                              <div  className='col-6 data ml-2 mt-2'>
//                                                  <h6 style={{color:"rgba(255, 255, 255, 1)"}}  className="ml-4">{product.product_name}</h6>
//                                                  <h6   style={{ color: "rgba(255, 255, 255, 0.6)"}} className="ml-4">{product.brand_name}</h6>
//                                                  <h6  style={{ color: "rgba(255, 255, 255, 1)"}} className="ml-4">{product.price}</h6>
//                                              </div>
//                                     </div>
//                                        <div className='row '>
//                                             <div className='col-2 bottom'><h6 style={{ color: "rgba(255, 255, 255, 0.6)"}}>{product.address.city}</h6></div>
//                                              <div className='col-8 date'><h6 style={{ color: "rgba(255, 255, 255, 0.6)"}} className="ml-5">Date:{product.date}</h6></div>
//                                              <h5 className='location' style={{ color: "rgba(255, 255, 255, 0.6)"}} >{product.discription}</h5>
//                                        </div>
//                                 </div>
//                              ))}  
//                                      {/* ///////////// */}

//                                   </div>
                    
//                                 <h3 className="mt-4 pName ml-2" style={{color:"rgba(255, 255, 255, 1)"}}>Alphabet inc</h3>
//                                   <hr className='hr2' />
//                                  <div className='list-two  row'>
//                                  {Products.map(
//                              (product)=>(    product.product_name == "Alphabet inc" && 
//                                 <div className='holder one mt-3  col-lg-3 col-md-4 col-sm-12 '>
//                                    <div className='top row'>
//                                         <div className='col-4  img' > <img src={product.image} alt="error 404"/> </div>
//                                              <div  className='col-6 data ml-2 mt-2'>
//                                                  <h6 style={{color:"rgba(255, 255, 255, 1)"}}  className="ml-4">{product.product_name}</h6>
//                                                  <h6   style={{ color: "rgba(255, 255, 255, 0.6)"}} className="ml-4">{product.brand_name}</h6>
//                                                  <h6  style={{ color: "rgba(255, 255, 255, 1)"}} className="ml-4">{product.price}</h6>
//                                              </div>
//                                     </div>
//                                        <div className='row '>
//                                             <div className='col-2 bottom'><h6 style={{ color: "rgba(255, 255, 255, 0.6)"}}>{product.address.city}</h6></div>
//                                              <div className='col-8 date'><h6 style={{ color: "rgba(255, 255, 255, 0.6)"}} className="ml-5">Date:{product.date}</h6></div>
//                                              <h5 className='location' style={{ color: "rgba(255, 255, 255, 0.6)"}} >{product.discription}</h5>
//                                        </div>
//                                 </div>
//                                ))}  
//                          </div> 
//                     </div>
//              </div>
//        </div>
//     </>

//     )
// }