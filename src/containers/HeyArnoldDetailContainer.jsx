import React, { Component } from 'react';
import { getCharacterById } from '../services/heyArnoldApi';
import DetailCharacter from '../components/characters/DetailCharacter';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    character: [],
  };
  async componentDidMount() {
    const character = await getCharacterById(this.props.match.params.id);

    this.setState({ character });
  }
  render() {
    console.log(this.state.character);
    const { character } = this.state;
    return <DetailCharacter name={character.name} image={character.image} />;
  }
}
