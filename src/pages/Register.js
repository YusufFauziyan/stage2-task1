import React from 'react'

function Register() {
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
                    <a href="#link">
                        <button className="btn register text-secondary fw-600 py-2 px-5 me-2">Login</button>
                    </a>
                    <a href="#link">
                        <button className="btn login bg-use py-2 px-5 fw-600 text-white">Register</button>
                    </a>
                </div>
            </div>

            <div className="form col-lg-6 d-lg-flex justify-content-end">
                <div className="bg-form p-5 " style={{width: "416px", borderRadius: "10px"}}> 
                    <h2 className='fw-900 mb-5'>Register</h2>
                    <input type="text" className="bg-input mb-4 fw-600 form-control" id="formGroupExampleInput" placeholder="Name" />
                    <input type="email" className="bg-input mb-4 fw-600 form-control" id="formGroupExampleInput" placeholder="Email" />
                    <input type="password" className="bg-input fw-600 form-control" id="formGroupExampleInput" placeholder="Password" />
                    <a href="#link">
                        <button className="btn login bg-use mt-5 fw-600 text-white" style={{width: "100%"}}>Register</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register