import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class MessageBtn extends Component {
  render() {
    return (
      <>
        <Modal.Dialog variant={"dark"}>
            <Modal.Header closeButton>
                <Modal.Title className='fw-900'>Delete Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete this data?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button className='bg-green py-1 px-5 border-none modalyes'>Yes</Button>
                <Button className='bg-use py-1 px-5 border-none modalno'>No</Button>
            </Modal.Footer>
        </Modal.Dialog>
      </>
    )
  }
}
