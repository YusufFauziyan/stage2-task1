import React, {useState} from 'react'
import MessageBtn from '../../component/MessageBtn'

function EditProduct () {
  const [modalShow, setModalShow] = useState(false);
    return (
    <>
      <div className=" container mt-5">
          <h2 className="fw-900 my-5">List Product</h2>
          <div className="d-flex">
              <a href="#link">
                  <button className="btn delete bg-use py-2 px-lg-5 text-white me-3" onClick={() => setModalShow(true)}>Delete</button>
              </a>
              <p className='my-auto'>Mouse.jpg</p>
          </div>
          <div className="row mt-4 px-3">
              <input type="text" className="bg-input mb-4 fw-600 form-control p-2 text-secondary-2" id="formGroupExampleInput" value={"Mouse"} />
              <textarea className='bg-input mb-4 fw-600 form-control p-2 text-secondary-2 text-justify' name="" id="" cols="" rows="7" style={{resize: "none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel quod nesciunt, magnam neque at debitis maxime odio voluptatibus! Sit corporis odit qui dolore quidem ducimus doloribus facere, est quod voluptatum iusto iure sunt saepe delectus ad laudantium voluptas error? Doloremque labore, quam consequatur fugit unde, repudiandae repellendus non in nam sapiente nulla incidunt laudantium doloribus debitis quo reprehenderit vero reiciendis neque provident et. Id, fugiat similique sed iste officia laboriosam maxime veritatis fugit iusto, aliquid quaerat molestiae ipsa repudiandae magni nisi debitis voluptate! Illo quisquam doloremque distinctio reiciendis quo recusandae veniam mollitia, excepturi sunt, suscipit quod odio! Hic, inventore.</textarea>
              <input type="text" className="bg-input mb-4 fw-600 form-control p-2 text-secondary-2" id="formGroupExampleInput" value={"500.000"} />
              <input type="text" className="bg-input mb-4 fw-600 form-control p-2 text-secondary-2" id="formGroupExampleInput" value={"600"} />
          </div>
          <a href="#link" className='row text-d-none px-3' >
              <button className="btn mt-5 edit bg-green py-2 fw-600 text-white">Save</button>
          </a>
          <MessageBtn show={modalShow} onHide={() => setModalShow(false)}/>
      </div> 
    </>
  )
}

export default EditProduct
