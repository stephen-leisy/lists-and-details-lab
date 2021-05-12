import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <>
    <h1>{name}</h1>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Character;
