import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import piperPuppyCar from '../images/piper/piper-puppy-car.jpg';
import piperPuppySF from '../images/piper/piper-puppy-sf.jpg';

import piperBeachPup from '../images/piper/piper-beach-pup.jpg';
import piperBeachBall from '../images/piper/piper-beach-ball.jpg';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>TierraCast Inc</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        I got Piper in July 2018 with my girlfriend. She&apos;s been a bundle of
        fun ever since!
      </p>
      <h5>Puppy Years</h5>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              height='350px'
              imageSource={piperPuppyCar}
              captionText='Bringing Piper Home'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              height='350px'
              imageSource={piperPuppySF}
              captionText='Piper at Alamo Square Park'
            />
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <iframe
              title="Piper's First Beach Walk"
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/0ril4s9_wKM'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <iframe
              title="Piper's First Fetch"
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/HGNI_uSHrDo'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Card>
        </Col>
      </Row>
      <h5>All Grown Up</h5>
      <p>
        Piper is now about 1.5 years old and has matured into a sweet pup. Her
        favorites are the beach, fetch, and visiting friends at the office.
      </p>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              height='350px'
              imageSource={piperBeachPup}
              captionText='Beach Exploration'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              height='350px'
              imageSource={piperBeachBall}
              captionText='Beach Fetch'
            />
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <iframe
              title='Beach Fetch Video'
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/N0yIYBoYFV4'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <iframe
              title='Piper at the Office'
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/r4TdR8_v_bU'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Card>
        </Col>
      </Row>
      <p>See more of Piper on her Instagram profile!</p>
      <a
        className='btn btn-success d-block'
        href='https://www.instagram.com/pip_the_mini_aussie/'
        role='button'
        style={{ maxWidth: '250px', margin: '15px auto' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Piper&apos;s Instagram
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
