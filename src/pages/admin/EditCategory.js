import React, { Component } from 'react'
import Navbar from '../../component/Navbar'

const EditProduct = () => {
  return (
    <>
    <Navbar />
      <div className=" container mt-5">
          <h2 className="fw-900 mt-5 mb-4">List Category</h2>
          <input type="text" className="bg-input mb-4 fw-600 form-control p-2 text-secondary-2" id="formGroupExampleInput" value={"Mouse"} />
          <a href="#link" className='row text-d-none px-2' >
              <button className="btn mt-5 edit bg-green py-2 fw-600 text-white">Save</button>
          </a>
      </div>
    </>
  )
}

export default EditProduct

