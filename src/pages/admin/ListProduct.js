import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Data from "../../data_dummy/listproduct.json"

export default class ListProduct extends Component {
  render() {
    return (
      <>
        <div className=" container mt-5">
            <h2 className="fw-900 mt-5 mb-3">List Product</h2>
            <table class="table table-dark table-striped">
                <thead >
                    <tr>
                        <th scope="col" className='col-1 py-3'>No</th>
                        <th scope="col" className='col-2 py-3'>Photo</th>
                        <th scope="col" className='col-2 py-3'>Product Name</th>
                        <th scope="col" className='col-2 py-3'>Product Desc</th>
                        <th scope="col" className='col-1 py-3'>Price</th>
                        <th scope="col" className='col-1 py-3'>Qty</th>
                        <th scope="col" className='col-3 py-3'>Action</th>
                    </tr>
                </thead>
                {Data.map(item => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row" className='py-3'>{item.id}</th>
                                <td className="py-3"><a href="#link" style={{color: "white"}}>{item.photo}</a></td>
                                <td className='py-3'>{item.productname}</td>
                                <td className='py-3'>{item.productdesc}</td>
                                <td className='py-3'>{item.price}</td>
                                <td className='py-3'>{item.qty}</td>
                                <td>
                                    <NavLink to="/product/edit-product" className='me-3'>
                                        <button className="btn edit bg-green py-2 px-lg-5 fw-600 text-white">Edit</button>
                                    </NavLink>
                                    <a href="#link">
                                        <button className="btn delete bg-use py-2 px-lg-5 fw-600 text-white">Delete</button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
      </>
    )
  }
}
