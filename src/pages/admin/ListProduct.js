import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Data from "../../data_dummy/listproduct.json"
import MessageBtn from '../../component/MessageBtn'

function ListProduct () {
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <div className=" container mt-5">
            <div className="d-flex justify-content-between">
                <h2 className="fw-900 mt-5 mb-3">List Product</h2>
                <Link to="#" className='mt-5 mb-3'>
                    <button className='btn btn-dark btn-add'>Add Product <i class='bx bx-plus'></i></button>
                </Link>
            
            </div>
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
                                <td className="py-3"><img src={require(`../../component/img/${item.photo}`)} alt="" style={{width: "100px", height: "50px", objectFit: "cover", objectPosition: "50% 50%"}}/></td>
                                <td className='py-3'>{item.productname}</td>
                                <td className='py-3'>{item.productdesc}</td>
                                <td className='py-3'>{item.price}</td>
                                <td className='py-3'>{item.qty}</td>
                                <td>
                                    <Link to="/product/edit-product" className='me-3'>
                                        <button className="btn edit bg-green py-2 px-xl-5 fw-600 text-white">Edit</button>
                                    </Link>
                                    <button className="btn delete bg-use py-2 px-xl-5 fw-600 text-white" onClick={() => setModalShow(true)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
        <MessageBtn show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    )
}

export default ListProduct
