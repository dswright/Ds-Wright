import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Modal
} from 'react-bootstrap';

import AirbnbModal from '../modals/airbnb';

import styles from '../home.scss';

import airbnbPic from '../images/airbnb/airbnb-pic.jpg';

const projects = [
  {
    title: 'Airbnb Host',
    image: airbnbPic,
    description: 'I own an Airbnb in Bodega Bay with my family.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'My Dog',
    image: '',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
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
                <Card.Img variant='top' src={job.image} />
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
