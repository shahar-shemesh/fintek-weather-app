import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders prompt message', () => {
  render(<App />);
  expect(screen.getByText(/Use our weather app/i)).toBeInTheDocument();
});
