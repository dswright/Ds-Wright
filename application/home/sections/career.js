import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Modal
} from 'react-bootstrap';
import CoverHoundModal from '../modals/coverhound';
import CyberPolicyModal from '../modals/cyberpolicy';
import StockIQModal from '../modals/stock-iq';

import styles from '../home.scss';

import cyberHomepage from '../images/cyberpolicy/homepage.png';
import coverhoundHomepage from '../images/coverhound/homepage.png';
import stockIq from '../images/stock-iq/home.png';

const jobs = [
  {
    title: 'CyberPolicy',
    image: cyberHomepage,
    description:
      'CyberPolicy is an app for finding the best cyber insurance policy for your small business.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'CoverHound',
    image: coverhoundHomepage,
    description:
      'CoverHound Small Business is an app for finding the best insurance products for your small business.',
    buttonCta: 'Go Somewhere'
  },
  {
    title: 'Stock IQ',
    image: stockIq,
    description:
      'Stock IQ is a social platform for sharing your stock picks and discussing stock trades.',
    buttonCta: 'Go Somewhere'
  }
];

export default () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedModal, setSelectedModal] = useState('');

  const getModalContents = (selectedModal, setShowModal) => {
    switch (selectedModal) {
      case 'CyberPolicy':
        return <CyberPolicyModal setShowModal={setShowModal} />;
      case 'CoverHound':
        return <CoverHoundModal setShowModal={setShowModal} />;
      case 'Stock IQ':
        return <StockIQModal setShowModal={setShowModal} />;
      default:
        return <div />;
    }
  };

  return (
    <Container>
      <h4 className='mt-4 mb-3'>Software Engineering Experience</h4>
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
