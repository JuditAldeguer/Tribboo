import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test('renders "Proyecto"', () => {
  // Arrange
  render(<Header />);
  // Act
  const divElement = screen.getByText("Planning/ Nombre del Proyecto");
  // console.log(`<<<<<<<<<<<<`, divElement);
  // Assert
  expect(divElement).toBeInTheDocument();
});
