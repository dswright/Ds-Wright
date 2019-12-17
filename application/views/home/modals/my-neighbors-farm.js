import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import myNeighborsFarmHomepage from '../images/my-neighbors-farm/full-homepage.png';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>MyNeighborsFarm</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        While on a roadtrip around the US with my girlfriend and my dog in the
        summer of 2019, I got inspired to try and build a product for small
        farmers.
      </p>
      <p>
        I came up with MyNeighborsFarm, a platform for small farms to their
        products directly to local buyers.
      </p>
      <p>
        So far I don&apos;t have much, but its a work in progress, and I do like
        the tech stack I have so far!
      </p>
      <Row>
        <Col>
          <Card style={{ width: '80%', minWidth: '300px', margin: 'auto' }}>
            <ModalImage
              height='300px'
              imageSource={myNeighborsFarmHomepage}
              captionText='MyNeighborsFarm Homepage'
            />
          </Card>
        </Col>
      </Row>
      <h5>Tech Stack</h5>
      <p>React with UniversalComponents, Node, Postgres, and Heroku</p>
      <a
        className='btn btn-success d-block'
        href='https://myneighborsfarm.herokuapp.com/'
        role='button'
        style={{ maxWidth: '300px', margin: '15px auto' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit MyNeighborsFarm
      </a>
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
