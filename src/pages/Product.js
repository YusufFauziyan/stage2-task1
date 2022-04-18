import React from 'react'
import { Link } from "react-router-dom";
import Data from '../data_dummy/Product.json'
import Navbar from '../component/Navbar'

function Product () {
  return (
    <>
    <Navbar />
      <div className=" container mt-5">
          <h2 className='text-use fw-600 mb-4'>Product</h2>
          <div className='d-flex flex-wrap '>

              {Data.map((item) => {
                return(
                  <div style={{borderRadius: "0 0 10px 10px"}} className="bg-card me-4 mt-3">
                      <img src={require(`../component/img/${item.image}`)} alt="" width={"300px"} height={"312px"} style={{objectFit: "cover"}}/>
                      <div className="p-3">
                          <Link to={`/detail-product/${item.id}`} className="text-use text-decoration-none fw-600 fs-18 product-link">{item.title}</Link>
                          <p className="fs-14 mb-2 mt-3">Rp. {item.price}</p>
                          <p className="fs-14 mb-1">Stock: {item.stock}</p>
                      </div>
                  </div>
                )
              })}

          </div>
      </div>
    </> 
  )
}

export default Product
