
import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPage from './DetailsPage';
import { MemoryRouter } from 'react-router-dom';


describe('Details Page', () => {

  it('should render the Details page', async () => {
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).toBeInTheDocument();
    expect(ul).toMatchSnapshot();
  });
});
