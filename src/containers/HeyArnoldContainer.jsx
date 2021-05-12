import React, { Component } from 'react';
import { getCharacters } from '../services/heyArnoldApi';
import CharacterList from '../components/characters/CharacterList';

export default class HeyArnoldContainer extends Component {
  state = {
    characterList: [],
    loading: true,
  };

  async componentDidMount() {
    const characterList = await getCharacters();
    this.setState({ characterList, loading: false });
  }
  render() {
    const { characterList, loading } = this.state;

    if (loading === true) return <div>loading...</div>;

    return (
      <div className="main">
        <CharacterList list={characterList} />
      </div>
    );
  }
}
