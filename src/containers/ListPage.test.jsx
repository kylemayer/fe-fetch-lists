import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ListPage from './ListPage';
import { MemoryRouter } from 'react-router-dom';

describe('List Page', () => {
  afterEach(() => cleanup());
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
