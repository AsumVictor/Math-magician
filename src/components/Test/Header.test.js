// Import the necessary dependencies for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom'; // Import the package

test('Header renders correctly', () => {
  // Render the Header component within the BrowserRouter for testing the NavLink behavior
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  // Test that the "Math Magician" link is present with the correct text
  const mathMagicianLink = screen.getByRole('link', { name: /Math Magician/i });
  expect(mathMagicianLink).toBeInTheDocument();

  // Test that the "Home" NavLink is present and has the correct text
  const homeNavLink = screen.getByRole('link', { name: /Home/i });
  expect(homeNavLink).toBeInTheDocument();
  expect(homeNavLink).toHaveAttribute('href', '/');

  // Test that the "Calculator" NavLink is present and has the correct text
  const calculatorNavLink = screen.getByRole('link', { name: /Calculator/i });
  expect(calculatorNavLink).toBeInTheDocument();
  expect(calculatorNavLink).toHaveAttribute('href', '/calculator');

  // Test that the "Quotes" NavLink is present and has the correct text
  const quotesNavLink = screen.getByRole('link', { name: /Quotes/i });
  expect(quotesNavLink).toBeInTheDocument();
  expect(quotesNavLink).toHaveAttribute('href', '/quote');
});
