import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Quotes from '../Quotes';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    { quote: 'Test Quote 1', author: 'Test Author 1' },
    { quote: 'Test Quote 2', author: 'Test Author 2' },
  ]),
}));

describe('Quotes Component', () => {
  it("should render 'Loading quotes' initially", () => {
    const { getByText } = render(<Quotes />);
    expect(getByText('Loading quotes')).toBeInTheDocument();
  });

  it('should render quotes after API call', async () => {
    await act(async () => {
      const { findByText } = render(<Quotes />);
      await waitFor(() => {
        expect(findByText('Test Quote 1')).toBeInTheDocument();
        expect(findByText('Test Quote 2')).toBeInTheDocument();
      });
    });
  });

  it('should render error message if API call fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('API Error')));
    await act(async () => {
      const { getByText } = render(<Quotes />);
      await waitFor(() => expect(getByText('Opps error occurred fetch quotes! Try again')).toBeInTheDocument());
    });
  });
});
