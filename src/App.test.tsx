import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// TODO(drussell): this is a dead test. Write some decent ones
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
