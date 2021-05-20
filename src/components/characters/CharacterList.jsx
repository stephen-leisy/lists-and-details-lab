import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
  <div className="character-list">
    <ul aria-label="characters">
      {characters.map((character) => (
        <Link key={character.id} to={`/${character.id}`}>
          <li key={character.id}>
            <Character name={character.name} />
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default CharacterList;
