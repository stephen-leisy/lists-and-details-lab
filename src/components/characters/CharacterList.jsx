import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ list }) => (
  <ul aria-label="characters">
    {list.map((character) => (
      <Link key={character.id} to={`/${character.id}`}>
        <li key={character.id}>
          <Character name={character.name} image={character.image} />
        </li>
      </Link>
    ))}
  </ul>
);

CharacterList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
