import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import HeyArnoldDetailContainer from './HeyArnoldDetailContainer';
import { getCharacterById } from '../services/heyArnoldApi';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f5c',
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: '5da237699734fdcb7bef8f5c',
          name: 'Nancy',
          image:
            'https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg/revision/latest/scale-to-width-down/310?cb=20110423055923',
        })
      );
    }
  )
);

describe('Detail container tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
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
    const div = await screen.findAllByRole('list', { name: 'character' });
    expect(div).toMatchSnapshot();

    return waitFor(() => {
      screen.getByText('Nancy');
    });
  });
});
