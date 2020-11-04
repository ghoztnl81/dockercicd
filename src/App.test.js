import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders docker text', () => {
  render(<App />);
  const linkElement = screen.getByText(/ocker/i);
  expect(linkElement).toBeInTheDocument();
});
