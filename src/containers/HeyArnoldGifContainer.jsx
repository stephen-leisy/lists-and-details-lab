import React, { Component } from 'react';
import { getRandomGif } from '../services/heyArnoldApi';
import GigCharacter from '../components/characters/GigCharacter';

export default class HeyArnoldGifContainer extends Component {
  state = {
    gif: {},
    loading: true,
  };

  async componentDidMount() {
    const gif = await getRandomGif();
    this.setState({ gif, loading: false });
  }
  render() {
    const { gif, loading } = this.state;
    console.log('container', gif.gifLink);
    if (loading === true) return <div>loading...</div>;
    return <GigCharacter gifLink={gif.gifLink} />;
  }
}
