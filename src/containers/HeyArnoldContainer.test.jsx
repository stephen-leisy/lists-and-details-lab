import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from './HeyArnoldContainer';

describe('Hey Arnold Container Tests', () => {
  it.only('renders a list of characters to the page', async () => {
    render(<HeyArnoldContainer />);
    screen.getByText('loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
