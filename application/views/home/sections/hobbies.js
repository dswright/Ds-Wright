import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Modal
} from 'react-bootstrap';

import AirbnbModal from '../modals/airbnb';
import PiperModal from '../modals/piper';

import styles from '../home.scss';

import airbnbPic from '../images/airbnb/airbnb-pic.jpg';
import piperTheMiniAussie from '../images/piper/homepage.jpg';

const projects = [
  {
    title: 'Airbnb Host',
    image: airbnbPic,
    description: 'I own an Airbnb in Bodega Bay with my family.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Piper The Mini Aussie',
    image: piperTheMiniAussie,
    description:
      "I got Piper the Mini Aussie in July 2018. She's the cutest mini-aussie in SF!",
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Games',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedModal, setSelectedModal] = useState('');

  const getModalContents = (selectedModal, setShowModal) => {
    switch (selectedModal) {
      case 'Airbnb Host':
        return <AirbnbModal setShowModal={setShowModal} />;
      case 'Piper The Mini Aussie':
        return <PiperModal setShowModal={setShowModal} />;
      default:
        return <div />;
    }
  };

  return (
    <Container>
      <h4 className='mt-4'>Hobbies</h4>
      <Row>
        {projects.map((job) => (
          <Col md={4} key={job.title}>
            <div
              onClick={() => {
                setShowModal(true);
                setSelectedModal(job.title);
              }}
              role='button'
              onKeyPress={(event) => {
                if (event.keyCode === 13) {
                  setShowModal(true);
                }
              }}
              tabIndex={0}
              style={{ display: 'block' }}
            >
              <Card className={styles.card}>
                <div
                  style={{
                    backgroundImage: `url("${job.image}")`,
                    backgroundSize: 'cover',
                    height: '150px',
                    backgroundPosition: '80%',
                    backgroundPositionY: '20%'
                  }}
                />
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        size='lg'
      >
        {getModalContents(selectedModal, setShowModal)}
      </Modal>
    </Container>
  );
};
