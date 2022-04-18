import React, { Component } from 'react'
import Navbar from '../component/Navbar'

export default class ChatUser extends Component {
  render() {
    return (
      <>
      <Navbar />
        <div className=" container mt-5">
            <div className='row'>
                <div className='col-4 d-flex'>
                    <img className='me-3' src={require("../component/img/admin.png")} alt="admin" width={"50px"} height={"50px"}/>
                    <div>
                        <p className="fs-14 fw-500 mb-2">Admin</p>
                        <p className="fs-14 fw-500 text-secondary-2">Yes, Is there anything I can help</p>
                    </div>
                    <div className="ms-auto">
                        <img src={require("../component/img/line.png")} alt="" className='d-flex justify-content-end' height={"800px"}/>
                    </div>
                </div>



                <div className='col-8 d-flex flex-column justify-content-end'>
                    <div className='d-flex justify-content-end'>
                        <p className="fw-500 bg-card p-3" style={{borderRadius: "5px", width: "max-content"}}>Hello Admin, I Need Your Help</p>
                        <span className='mt-2' style={{width: "0", height: "0", borderTop: "18px solid transparent", borderLeft: "30px solid #212121", borderBottom: "18px solid transparent"}}></span>
                    </div>
                    <div className="d-flex ms-3">
                        <img className="me-3" src={require("../component/img/admin.png")} alt="" width={"50px"} height={"50px"}/>
                        <div className='d-flex'>
                            <span className='mt-2' style={{width: "0", height: "0", borderTop: "18px solid transparent", borderRight: "30px solid rgba(210, 210, 210, 0.25)", borderBottom: "18px solid transparent"}}></span>
                            <p className="fw-500 bg-input p-3" style={{borderRadius: "5px", width: "max-content"}}>Yes, Is there anything I can help ?</p>
                        </div>
                    </div>

                    <div className='d-flex ms-4 mt-4'>
                        <input type="text" className="bg-input mb-4 fw-600 form-control p-3" id="formGroupExampleInput" placeholder="Send Message" style={{border: "none"}} />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
