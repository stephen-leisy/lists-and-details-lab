import { useState, useEffect } from 'react';
import {
  getCharacters,
  getCharacterById,
  getRandomGif,
} from '../services/heyArnoldApi';

export const useAllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};

export const useOneCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);
  return { loading, character };
};

export const useGif = () => {
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState({});

  useEffect(() => {
    getRandomGif()
      .then(setGif)
      .finally(() => setLoading(false));
  }, []);
  return { loading, gif };
};
