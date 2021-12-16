import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the task button', () => {
  render(<App />);
  const linkElement = screen.getByText("New Task");
  expect(linkElement).toBeInTheDocument();
});
