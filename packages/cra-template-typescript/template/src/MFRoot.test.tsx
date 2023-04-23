import React from 'react';
import { render, screen } from '@testing-library/react';
import MFRoot from './MFRoot';

test('renders micro frontend header', () => {
  render(<MFRoot />);
  const headerElement = screen.getByText(/Micro Frontend/i);
  expect(headerElement).toBeInTheDocument();
});
