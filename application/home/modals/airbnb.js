import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import airbnbBeginning from '../images/airbnb/airbnb-beginning.jpg';
import airbnbBeginningInside from '../images/airbnb/airbnb-original-inside.jpg';
import upstairsKitchenRenovations from '../images/airbnb/upstairs-kitchen-rennovations.jpg';
import floorDemoUpstairs from '../images/airbnb/floor-demo-upstairs.jpg';
import rennovationsBreak from '../images/airbnb/rennovations-break.jpg';
import upstairsDemod from '../images/airbnb/upstairs-demod.jpg';
import boathouseComplete from '../images/airbnb/boathouse-complete.png';
import diningTable from '../images/airbnb/dining-table.png';
import kitchenUpdated from '../images/airbnb/kitchen-updated.png';
import updatedEntry from '../images/airbnb/updated-entry.png';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>The Boat House on the Bay</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        In 2017, my brother and I thought it would be fun to buy a house and
        turn it into an Airbnb. We ended up buying a duplex in the small town of
        Bodega Bay, nearby to where our parents live.
      </p>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={airbnbBeginning}
              captionText='Original Outside View'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card style={{ width: '80%', margin: 'auto' }}>
            <ModalImage
              imageSource={airbnbBeginningInside}
              captionText='Original Upstairs Kitchen'
            />
          </Card>
        </Col>
      </Row>
      <p>
        The downstairs unit looked OK, but the upstairs unit needed to be
        renovated. My Dad and I did the demo ourselves.
      </p>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={upstairsKitchenRenovations}
              captionText='Removing Upstairs Kitchen Cabinets'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card style={{ width: '80%', margin: 'auto' }}>
            <ModalImage
              imageSource={floorDemoUpstairs}
              captionText='Kitchen Floor Demo'
            />
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={rennovationsBreak}
              captionText='Dad Taking a Break'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              imageSource={upstairsDemod}
              captionText='Upstairs Demo Complete'
            />
          </Card>
        </Col>
      </Row>
      <p>
        Upstairs rennovations complete! It took 4 months from purchase in July
        2017, to listing on Airbnb in November 2017.
      </p>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={kitchenUpdated}
              captionText='Renovated kitchen'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              imageSource={diningTable}
              captionText='Renovated Dining Area'
            />
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              imageSource={updatedEntry}
              captionText='Renovated Living Room'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              imageSource={boathouseComplete}
              captionText='Outside View'
            />
          </Card>
        </Col>
      </Row>
      <p>
        Now we have the full house listed on Airbnb. My parents manage the
        day-to-day maintenance of the Airbnb, and I enjoy going up for visits
        when its available.
      </p>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <iframe
          title='Bodega Bay Airbnb Promo Video'
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/24PkMaOluvQ'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <a
        className='btn btn-success d-block'
        href='https://www.airbnb.com/rooms/21961842?s=67&shared_item_type=1&virality_entry_point=1&sharer_id=24534364'
        role='button'
        style={{ maxWidth: '250px', margin: '20px auto 15px' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        See the Airbnb listing
      </a>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant='light'
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </Button>
    </Modal.Footer>
  </Fragment>
);
