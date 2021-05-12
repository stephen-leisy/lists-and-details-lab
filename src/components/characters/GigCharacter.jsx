import React from 'react';
import PropTypes from 'prop-types';

function GigCharacter({ gifLink }) {
  console.log('display', gifLink);
  return (
    <div>
      <img src={gifLink} />
    </div>
  );
}

GigCharacter.propTypes = {
  gifLink: PropTypes.string.isRequired,
};

export default GigCharacter;
