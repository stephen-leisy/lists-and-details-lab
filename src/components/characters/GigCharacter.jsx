import React from 'react';

function GigCharacter({ gifLink, id }) {
  return (
    <main>
      <img src={gifLink} alt={id} />
    </main>
  );
}
export default GigCharacter;
