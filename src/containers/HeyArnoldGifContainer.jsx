import React, { Component } from 'react';
import { getRandomGif } from '../services/heyArnoldApi';
import GigCharacter from '../components/characters/GigCharacter';

export default class HeyArnoldGifContainer extends Component {
  state = {
    gif: {},
  };

  async componentDidMount() {
    const gif = await getRandomGif();
    this.setState({ gif });
  }
  render() {
    const { gifLink } = this.state.gif;
    console.log('container', gifLink);
    return <GigCharacter gifLink={gifLink} />;
  }
}
