import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn opencascade.js link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn opencascade.js/i);
  expect(linkElement).toBeInTheDocument();
});
