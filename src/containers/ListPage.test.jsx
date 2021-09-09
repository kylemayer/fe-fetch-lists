import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';

describe('List Page', () => {

  it('should render the List page', async () => {
    render(<ListPage />);

    const ul = await screen.findByRole('villagers', { name: 'villagers' });
    expect(ul).toBeInTheDocument();
    expect(ul).toMatchSnapshot();
  });
});
