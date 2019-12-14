import React, { Fragment } from 'react';
import modalStyles from './modals.scss';

export default ({ imageSource, captionText, height }) => (
  <a href={imageSource} target='_blank' rel='noopener noreferrer'>
    <div
      src={imageSource}
      className={modalStyles.imageContainer}
      style={{
        backgroundImage: `url("${imageSource}")`,
        height: height || '200px'
      }}
    />
    <p className={modalStyles.caption}>{captionText}</p>
  </a>
);
