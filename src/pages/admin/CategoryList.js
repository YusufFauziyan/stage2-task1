import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from "../../data_dummy/categoryproduct.json"
import MessageBtn from '../../component/MessageBtn'

function CategoryList () {
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <div className=" container mt-5">
            <h2 className="fw-900 mt-5 mb-3">List Category</h2>
            <table class="table table-dark table-striped" id='table'>
                <thead >
                    <tr>
                        <th scope="col" className='col-4 fw-700 p-3'>No</th>
                        <th scope="col" className='col-4 fw-700 p-3'>Category Name</th>
                        <th scope="col" className='col-4 fw-700 py-3 pe-3'>Action</th>
                    </tr>
                </thead>
                {Data.map((item) =>{
                    return (
                        <tbody>
                            <tr>
                                <th scope="row" className='p-3'>{item.id}</th>
                                <td className='p-3'>{item.categoryname}</td>
                                <td>
                                    <NavLink to="/category/edit-category" className='me-3'>
                                        <button className="btn edit bg-green py-2 px-lg-5 fw-600 text-white">Edit</button>
                                    </NavLink>
                                    <a href="#link">
                                        <button className="btn delete bg-use py-2 px-lg-5 fw-600 text-white" onClick={() => setModalShow(true)}>Delete</button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                        )
                    })}
            </table>
            <MessageBtn show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </>
    )
}

export default CategoryList