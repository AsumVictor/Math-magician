// Calculator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

test('renders Calculator component', () => {
  render(<Calculator />);
});

test('performs addition correctly', () => {
  const { getByText } = render(<Calculator />);
  const button2 = getByText('2');
  const buttonPlus = getByText('+');
  const buttonEquals = getByText('=');

  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
});

test('clears the calculation on AC button click', () => {
  const { getByText } = render(<Calculator />);
  const button2 = getByText('2');
  const buttonPlus = getByText('+');
  const buttonAC = getByText('AC');

  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonAC);
});
