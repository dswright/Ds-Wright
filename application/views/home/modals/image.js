import React, { Fragment } from 'react';
import modalStyles from './modals.scss';

export default ({ imageSource, captionText }) => (
  <a href={imageSource} target='_blank' rel='noopener noreferrer'>
    <div
      src={imageSource}
      className={modalStyles.imageContainer}
      style={{ backgroundImage: `url("${imageSource}")` }}
    />
    <p className={modalStyles.caption}>{captionText}</p>
  </a>
);
