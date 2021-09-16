import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          _id: '1',
          name: 'Admiral',
          image: 'example.com/image.png',
          species: 'bird',
          birthday: 'January 27th (Aquarius)',
          skill: 'Writing about pickles',
          phrase: 'aye aye',
        },
      ])
    );
  })
);

describe('List Page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should render the List page', async () => {
    render(
      <MemoryRouter>
        <ListPage />
      </MemoryRouter>
    );

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).toBeInTheDocument();
    expect(ul).toMatchSnapshot();
  });
});
