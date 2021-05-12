import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldDetailContainer from './HeyArnoldDetailContainer';

describe('Detail container tests', () => {
  it('renders one character to the screen', async () => {
    render(<HeyArnoldDetailContainer />);
    screen.getByText('loading...');
  });
});
