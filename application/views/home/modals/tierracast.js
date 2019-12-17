import React, { Fragment } from 'react';
import {
  Row, Col, Card, Modal, Button
} from 'react-bootstrap';
import ModalImage from './image';

import newHomepage from '../images/tierracast/new-homepage.png';
import newCollections from '../images/tierracast/new-collections.png';
import oldHomepage from '../images/tierracast/old-homepage.png';
import oldWebstore from '../images/tierracast/old-webstore-full.png';

export default ({ setShowModal }) => (
  <Fragment>
    <Modal.Header closeButton>
      <Modal.Title>TierraCast Inc</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>Growing up at the Shop</h5>
      <p>
        When I was growing up, my mom worked as a manager at a small jewelry
        manufacturing company about 5 minutes from my house.
      </p>
      <p>
        When I was in highscool, I worked there too. I packaged jewelry parts
        into bags to be shipped out and sold to retailers.
      </p>
      <h5>2018 Website Problems</h5>
      <p>
        In 2018, after months of not being able to find a new website developer
        to maintain their website, my mom asked me if I could help make updates
        to their outdated website. I agreed to make occasional updates. For the
        past 15 years, Tierracast.com had been written in PHP 5, had no content
        management system, and was maintained entirely manually with file
        updates done over FTP. Separately, in 2011, they launched an online
        e-commerce system that was directly integrated into their on-site
        inventory management system, and it was served on the
        webstore.tierracast.com subdomain.
      </p>

      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              height='350px'
              imageSource={oldHomepage}
              captionText='2018 TierraCast Homepage'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              height='350px'
              imageSource={oldWebstore}
              captionText='2018 TierraCast Webstore'
            />
          </Card>
        </Col>
      </Row>

      <p>
        Gradually, I convinced TierraCast they needed update to a modern and
        publicly visible e-commerce platform, and delete their PHP website
        completely.
      </p>
      <h5>A New Look</h5>
      <p>
        In 2019, I helped TierraCast select a new e-commerce platform, find a
        development agency to build the platform, and launch a new
        TierraCast.com website and shopping platform. Their customers were
        pleased with the new and improved experience.
      </p>
      <Row className='mb-4'>
        <Col md={6}>
          <Card>
            <ModalImage
              height='350px'
              imageSource={newHomepage}
              captionText='2018 TierraCast Homepage'
            />
          </Card>
        </Col>
        <Col md={6} className='mt-4 mt-md-0'>
          <Card>
            <ModalImage
              height='350px'
              imageSource={newCollections}
              captionText='2018 TierraCast Webstore'
            />
          </Card>
        </Col>
      </Row>
      <h5>New Results</h5>
      <p>
        Post-launch, I took a more active role in development on TierraCast.com
        and I helped optimize the new website to for improved SEO performance.
        They now hold several non-brand position 1 rankings, and they have
        gained dozens of non-brand page 1 rankings. Their monthly traffic from
        organic search has increased non-stop month over month since launch.
      </p>

      <h5>First Rank 1 Result</h5>
      <p>
        The first high-volume non-brand keyword that TierraCast captured was
        &apos;niobium ear wires&apos;. Visit the ranking page on
        TierraCast.com&nbsp;
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://tierracast.com/ear-wires/?Theme=Niobium'
        >
          here.
        </a>
        &nbsp;Check on Google to see if it is still the rank #1 page by
        clicking&nbsp;
        <a
          href='https://www.google.com/search?q=niobium+ear+wires'
          target='_blank'
          rel='noopener noreferrer'
        >
          here.
        </a>
      </p>
      <h5>Moving On</h5>
      <p>
        It has been fun to help TierraCast, and to have the opportunity to build
        an e-commerce experience from the ground up. But at this point, the new
        website that they needed is complete, and they now have a platform that
        allows them to properly update and manage their webite as necessary. So
        I am moving on!
      </p>

      <a
        className='btn btn-success d-block'
        href='https://tierracast.com'
        role='button'
        style={{ maxWidth: '250px', margin: '15px auto' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit TierraCast.com
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
