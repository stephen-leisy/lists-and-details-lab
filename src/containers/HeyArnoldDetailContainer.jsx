import React from 'react';
import Banner from '../components/header/Banner';
import DetailCharacter from '../components/characters/DetailCharacter';
import { useOneCharacter } from '../hooks/allCharacters';
import Spinner from '../components/characters/Spinner';

export default function HeyArnoldDetailContainer({
  match: {
    params: { id },
  },
}) {
  const { loading, character } = useOneCharacter(id);

  if (loading === true)
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
      <DetailCharacter {...character} />
    </main>
  );
}
