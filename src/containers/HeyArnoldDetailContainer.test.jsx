import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldDetailContainer from './HeyArnoldDetailContainer';
import { MemoryRouter } from 'react-router';

describe('Detail container tests', () => {
  it('renders one character to the screen', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldDetailContainer
          match={{
            params: {
              id: '5da237699734fdcb7bef8f5c',
            },
          }}
        />
      </MemoryRouter>
    );
    screen.getByText('loading...');
  });
});
