import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Modal
} from 'react-bootstrap';
import MyNeighborsFarmModal from '../modals/my-neighbors-farm';
import TierraCastModal from '../modals/tierracast';
import CryptoArbiModal from '../modals/crypto-arbi';

import styles from '../home.scss';

import myNeighborsFarmHomepage from '../images/my-neighbors-farm/homepage.png';
import tierracastHomepage from '../images/tierracast/homepage.png';
import cryptoArbiDashboard from '../images/crypto-arbi/dashboard.png';

const jobs = [
  {
    title: 'My Neighbors Farm',
    image: myNeighborsFarmHomepage,
    description:
      'MyNeighborsFarm is my current side project. Its not much except good coding practice for now!',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'TierraCast',
    image: tierracastHomepage,
    description:
      'TierraCast, Inc. is a manufacturer of of plated jewelry parts from my hometown of Santa Rosa, CA.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Crypto Arbi',
    image: cryptoArbiDashboard,
    description:
      'A cryptocurrency arbitrage bot that I created to automatically trade the price spreads on different crypto exchanges.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedModal, setSelectedModal] = useState('');

  const getModalContents = (selectedModal, setShowModal) => {
    switch (selectedModal) {
      case 'My Neighbors Farm':
        return <MyNeighborsFarmModal setShowModal={setShowModal} />;
      case 'TierraCast':
        return <TierraCastModal setShowModal={setShowModal} />;
      case 'Crypto Arbi':
        return <CryptoArbiModal setShowModal={setShowModal} />;
      default:
        return <div />;
    }
  };

  return (
    <Container>
      <h4 className='mt-4'>Side Projects</h4>
      <Row>
        {jobs.map((job) => (
          <Col md={4} key={job.title}>
            <div
              onClick={() => {
                setShowModal(true);
                setSelectedModal(job.title);
              }}
              title={`Learn More about ${job.title}`}
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
                    backgroundPosition: '50%'
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
