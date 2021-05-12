export const getCharacters = async () => {
  const response = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters`
  );
  const json = await response.json();
  console.log('earlier', json);
  return json.map((character) => ({
    name: character.name,
    image: character.image,
    id: character._id,
  }));
};
export const getCharacterById = async (charId) => {
  const response = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters/${charId}`
  );
  const { name, image, _id } = await response.json();

  return {
    name,
    image,
    id: _id,
  };
};
