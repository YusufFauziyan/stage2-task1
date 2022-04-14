import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <>
        <div className=" container mt-5">
            <h2 className='text-use fw-600 mb-4'>Product</h2>
            <div className='d-flex'>
                <div style={{borderRadius: "0 0 10px 10px"}} className="bg-card me-4">
                    <img src={require("../component/img/mouse.png")} alt="" />
                    <div className="p-3">
                        <Link to='/detailproduct' className="text-use text-decoration-none fw-600 fs-18 product-link">Mouse</Link>
                        <p className="fs-14 mb-2 mt-3">Rp. 500.000</p>
                        <p className="fs-14 mb-1">Stock: 600</p>
                    </div>
                </div>

                <div style={{borderRadius: "10px"}} className="bg-card">
                    <img src={require("../component/img/keyboard.png")} alt="" />
                    <div className="p-3">
                        <a href='#link' className="text-use text-decoration-none fw-600 fs-18 product-link">Keyboard</a>
                        <p className="fs-14 mb-2 mt-3">Rp. 700.000</p>
                        <p className="fs-14 mb-1">Stock: 600</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
