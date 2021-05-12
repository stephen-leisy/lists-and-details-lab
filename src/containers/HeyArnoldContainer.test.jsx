import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from './HeyArnoldContainer';
import { MemoryRouter } from 'react-router';

describe('Hey Arnold Container Tests', () => {
  it('renders a list of characters to the page', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldContainer />
      </MemoryRouter>
    );
    screen.getByText('loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
