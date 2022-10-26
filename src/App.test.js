import { render, screen } from '@testing-library/react';
import Cta from './js/cta';

test('renders learn react link', () => {
  render(<Cta />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
