import React from 'react';

export default () => (
  <div
    style={{
      backgroundColor: 'gainsboro',
      height: '75px',
      marginTop: '100px'
    }}
  >
    <div
      className='container'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <div style={{ flex: '1', color: 'grey' }}>
        Like my personal website? See the&nbsp;
        <a
          href='https://github.com/dswright/Ds-Wright'
          style={{ color: 'grey', textDecoration: 'underline' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          repo on Github.
        </a>
      </div>
    </div>
  </div>
);
