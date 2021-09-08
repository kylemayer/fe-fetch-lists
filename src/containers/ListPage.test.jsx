import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';

describe('List Page', () => {
  it('should render the List page', () => {
    render(<ListPage />);
    screen.getByText('Villagers from the village');
    screen.getByRole('list');
  });
});
