import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../images/profile-pic.png';
import styles from '../home.scss';

export default () => (
  <Container className='mt-4'>
    <Row>
      <Col md={8} className='mt-md-4'>
        <Row className='mb-4'>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ flex: 1, width: '210px' }} className='text-left mb-0'>
              Dylan Wright
            </h2>
            <div style={{ flex: 0.5 }} className='d-md-none d-block'>
              <img
                src={profilePic}
                alt='Dylan Wright Profile'
                className={styles.profilePic}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.intro}>
              Hi, I&apos;m Dylan! I&apos;m a software engineer with a passion
              for product design & growth marketing. I am currently seeking a
              new opportunity as a software engineer at a small to midsize
              company located in San Francisco, CA.
            </p>
          </Col>
        </Row>
      </Col>
      <Col md={4} className='d-none d-md-block'>
        <div>
          <img
            src={profilePic}
            alt='Dylan Wright Profile'
            className='d-block'
            style={{ maxWidth: '200px', borderRadius: '50%', margin: 'auto' }}
          />
        </div>
      </Col>
    </Row>
  </Container>
);
