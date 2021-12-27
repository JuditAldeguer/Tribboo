import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders "Nombre del Proyecto"', () => {
  // Arrange
  render(<Header />);
  // Act
  const divElement = screen.getByText("Nombre del Proyecto");
  // Assert
  expect(divElement).toBeInTheDocument();
});
