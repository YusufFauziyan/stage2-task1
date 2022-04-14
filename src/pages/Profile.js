import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <>
        <div className=" container mt-5">
            <div className='row profile'>
                <div className='col-lg-4 '>
                    <h2 className="fw-700 text-use">My Profile</h2>
                    <img className='mt-5' src={require('../component/img/profile.png')} alt="profile" />
                </div>
                <div className="col-lg-4 mt-5">
                    <div className='mt-5'></div>
                    <h4 className="text-use fw-600">Name</h4>
                    <p className='mb-4'>Udin</p>

                    <h4 className="text-use fw-600">Email</h4>
                    <p className='mb-4'>udingantengs@gmail.com</p>

                    <h4 className="text-use fw-600">Phone</h4>
                    <p className='mb-4'>083896833122</p>

                    <h4 className="text-use fw-600">Gender</h4>
                    <p className='mb-4'>Male</p>

                    <h4 className="text-use fw-600">Address</h4>
                    <p className='mb-4'>Jl. Lewi Goong No. 205 40234 Bandung Jawa Barat 40234 Kota Bandung Jawa Barat</p>
                </div>
                <div className="col-lg-4">
                    <h2 className="fw-700 text-use">My Transaction</h2>
                    <div className="mt-5 d-flex bg-card row p-3">
                        <img className='col-4' src={require('../component/img/mouse.png')} alt="mouse"/>
                        <div className='col-5'>
                            <p className="fs-14 text-use fw-700 m-0">Mouse</p>
                            <span className="fs-9 fw-500 text-use">Saturday: </span>
                            <span className="text-use fw-300 mb-3 fs-9">14 July 2021</span>
                            <p className="fs-12 fw-300 mt-3 mb-5">Price: Rp. 500.000</p>
                            <p className="fw-500 fs-12 m-0">Sub Total: Rp. 500.000</p>
                        </div>
                        <div className='col-3 text-center my-auto'>
                            <img src={require('../component/img/logo.png')} alt="logo" width={"50px"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
