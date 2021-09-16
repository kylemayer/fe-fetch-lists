
import React from 'react';
import { render } from '@testing-library/react';
import DetailsPage from './DetailsPage';
import { MemoryRouter } from 'react-router-dom';


describe('Details Page', () => {

  it('should render the Details page', async () => {
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );
  });
});
