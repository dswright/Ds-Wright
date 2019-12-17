import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>Games</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Stay tuned for this content!</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant='primary'
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </Button>
    </Modal.Footer>
  </Fragment>
);
