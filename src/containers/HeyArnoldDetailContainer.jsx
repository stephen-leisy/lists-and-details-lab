import React, { Component } from 'react';
import { getCharacterById } from '../services/heyArnoldApi';
import DetailCharacter from '../components/characters/DetailCharacter';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    character: [],
    loading: true,
  };
  async componentDidMount() {
    const character = await getCharacterById(this.props.match.params.id);
    this.setState({ character, loading: false });
  }
  render() {
    const { character, loading } = this.state;
    if (loading === true) return <div>loading...</div>;
    return <DetailCharacter name={character.name} image={character.image} />;
  }
}
