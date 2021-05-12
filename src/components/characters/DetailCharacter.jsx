import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <ul aria-label="character">
    <li>
      <h1>{name}</h1>
      <img src={image} alt={'picture'} />
    </li>
  </ul>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
