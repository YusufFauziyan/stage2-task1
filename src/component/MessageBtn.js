import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function MessageBtn (props) {
  return (
    <Modal variant={"dark"}
    {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='fw-900'>Delete Data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Are you sure you want to delete this data?</p>
        </Modal.Body>

        <Modal.Footer>
            <Button className='bg-green py-1 px-5 border-none modalyes'>Yes</Button>
            <Button className='bg-use py-1 px-5 border-none modalno' onClick={props.onHide}>No</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default MessageBtn
