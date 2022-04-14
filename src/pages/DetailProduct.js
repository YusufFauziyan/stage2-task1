import React, { Component } from 'react'

export default class DetailProduct extends Component {
  render() {
    return (
      <>
        <div className=" container container-height mt-5 d-md-flex">
          <img src={require('../component/img/mouse.png')} className="pb-3" alt="mouse"/>
          <div className='ms-md-5'>
            <h1 className="text-use fw-800">Mouse</h1>
            <p className='mb-5'>Stock: 600</p>
            <ul style={{listStyleType: '"- "', lineHeight: '30px'}} className="mb-3 fs-14 p-2">
              <li>Wireless Mouse</li>
              <li>Konektivitas wireles 2.4 GHz</li>
              <li>Jarak wireles hingga 10 M</li>
              <li>Plug and Play</li>
              <li>Baterai tahan hingga 12 Bulan</li>
            </ul>
            <div style={{width: "80%"}}>
              <p className='text-justify fs-14 lh-25 fw-300'>Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
              <h4 className='text-use fw-900 mt-4 text-end'>Rp. 500. 000</h4>
              <a href="#link" className='row text-d-none px-3' >
                  <button className="btn mt-5 delete bg-use py-2 fw-600 text-white">Buy</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
