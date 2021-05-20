import React from 'react';
import Banner from '../components/header/Banner';
import CharacterList from '../components/characters/CharacterList';
import { useAllCharacters } from '../hooks/allCharacters';
import Spinner from '../components/characters/Spinner';

export default function HeyArnoldContainer() {
  const { loading, characters } = useAllCharacters();

  if (loading)
    return (
      <main>
        <Banner />
        <Spinner /> loading...
      </main>
    );
  return (
    <main>
      <Banner />
      <CharacterList characters={characters} />
    </main>
  );
}
