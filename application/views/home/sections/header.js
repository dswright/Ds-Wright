import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../home.scss';

const cleanEmail = (dirtyEmail) => dirtyEmail.replace(/clicktoseecorrectemailof/g, '');

export default () => (
  <>
    <Navbar bg='light' fixed='top'>
      <div className='container'>
        <Nav className={styles.headerWrapper}>
          <Nav.Link
            href='https://www.linkedin.com/in/dylanswright/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2'
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link
            href='https://github.com/dswright'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2'
          >
            GitHub
          </Nav.Link>
          <Nav.Link
            href='/dylan-wright-software-engineer.pdf'
            className='p-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href='mailto:clicktoseecorrectemailofdylansamuelwright@gmail.com'
            className='p-2'
            onClick={(event) => {
              event.target.href = cleanEmail(event.target.href);
            }}
          >
            Email Me
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
    <div style={{ marginTop: '70px' }} />
  </>
);
