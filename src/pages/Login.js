import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    localStorage.setItem('user', 'test')
    navigate('/')
  }


  return (
    <> 
        <div className="d-flex row container container-lr align-items-center m-auto">
            <div className="col-lg-6">
                <img src={require('../component/img/logo.png')} alt="logo" />
                <div className='py-5'>
                  <h1 className='fw-900' style={{lineHeight: "76.5px", fontSize: '45px'}}>Easy, Fast and Reliable</h1>
                  <p className='mt-3'>Go shopping for merchandise, just go to dumb merch <br></br> shopping. the biggest merchandise in Indonesia</p>
                </div>
                <div>
                <Link to="/login">
                  <button className="btn btn-login bg-use py-2 px-5 fw-600 text-white">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn register text-secondary fw-600 py-2 px-5 ms-2">Register</button>
                </Link>
                </div>
            </div>

            <div className="form col-lg-6 d-lg-flex justify-content-end">
              <form onSubmit={login} className="bg-form p-5 " style={{width: "416px", borderRadius: "10px"}}> 
                <h2 className='fw-900 mb-5'>Login</h2>
                <input type="email" className="bg-input mb-4 fw-600 form-control" id="formGroupExampleInput" placeholder="Email" name='email' />
                <input type="password" className="bg-input fw-600 form-control" id="formGroupExampleInput" placeholder="Password" name='password' />
                  <button className="btn btn-login bg-use mt-5 fw-600 text-white"  style={{width: "100%"}} >Login</button>
              </form>
            </div>
        </div>
    </>
  )
}

export default Login