import React from 'react';
import Banner from '../components/header/Banner';
import { useGif } from '../hooks/allCharacters';
import GigCharacter from '../components/characters/GigCharacter';
import Spinner from '../components/characters/Spinner';

export default function HeyArnoldGifContainer() {
  const { loading, gif } = useGif();

  if (loading)
    return (
      <main>
        <Banner />
        <Spinner />
        loading...
      </main>
    );
  return (
    <main>
      <Banner />
      <GigCharacter {...gif} />
    </main>
  );
}
