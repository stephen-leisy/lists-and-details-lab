export const getCharacters = async () => {
  const response = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters`
  );
  const json = await response.json();

  return json.map(({ _id, name, image }) => ({
    name,
    image,
    id: _id,
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

export const getRandomGif = async () => {
  const gif = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=1`
  );
  const json = await gif.json();
  const { _id, gifLink } = await json[0];

  return {
    id: _id,
    gifLink,
  };
};
