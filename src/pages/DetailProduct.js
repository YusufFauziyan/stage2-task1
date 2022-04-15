import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data_dummy/DetailProduct.json"


function DetailProduct () {
  const params = useParams()
  const index = params.id

  console.log(Data);
  
    return ( 
      <>
        <div className=" container container-height mt-5 d-md-flex">
          <img src={require(`../component/img/${Data[index].image}`)} className="pb-3" alt="mouse"/>
          <div className='ms-md-5'>
            <h1 className="text-use fw-800">{Data[index].title}</h1>
            <p className='mb-5'>Stock: {Data[index].stock}</p>
            <ul style={{listStyleType: '"- "', lineHeight: '30px'}} className="mb-3 fs-14 p-2">
              <li>{Data[index].spec1}</li>
              <li>{Data[index].spec2}</li>
              <li>{Data[index].spec3}</li>
              <li>{Data[index].spec4}</li>
              <li>{Data[index].spec5}</li>
            </ul>
            <div style={{width: "80%"}}>
              <p className='text-justify fs-14 lh-25 fw-300'>{Data[index].desc}</p>
              <h4 className='text-use fw-900 mt-4 text-end'>Rp. {Data[index].price}</h4>
              <a href="#link" className='row text-d-none px-3' >
                  <button className="btn mt-5 delete bg-use py-2 fw-600 text-white">{Data[index].price}</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
}

export default DetailProduct

