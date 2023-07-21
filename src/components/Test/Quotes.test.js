import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../Quotes';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    { quote: 'Test', author: 'Author' },
  ]),
}));

describe('Quotes Component', () => {
  test('renders "Loading quotes" while fetching data', async () => {
    render(<Quotes />);
    expect(screen.getByText('Loading quotes')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Loading quotes')).toBeNull());
  });

  test('renders quotes correctly when data is fetched', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { quote: 'Test', author: 'Author' },
      ]),
    }));

    render(<Quotes />);
    await waitFor(() => expect(screen.getByText('Test')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Author')).toBeInTheDocument());
  });

  test('renders error message on fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fake error')));
    render(<Quotes />);
    await waitFor(() => expect(screen.getByText('Opps error occured fetch quotes! Try again')).toBeInTheDocument());
  });
});
