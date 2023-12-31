import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Screen from '../Screen';

describe('Screen component', () => {
  it('should render without crashing', () => {
    const props = {
      next: '123',
      operation: '+',
      total: '345',
    };
    const { container } = render(
      <Screen
        next={props.next}
        operation={props.operation}
        total={props.total}
      />,
    );
    expect(container).toBeTruthy();
  });

  it('should render 0 when all props are empty', () => {
    const props = {
      next: '',
      operation: '',
      total: '',
    };
    const { getByText } = render(
      <Screen
        next={props.next}
        operation={props.operation}
        total={props.total}
      />,
    );
    expect(getByText('0')).toBeInTheDocument();
  });

  it('should display PropTypes validation warning for missing props', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Screen />);
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  it('should display PropTypes validation warning for invalid prop types', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const props = {
      next: 123,
      operation: '+',
      total: '456',
    };
    render(
      <Screen
        next={props.next}
        operation={props.operation}
        total={props.total}
      />,
    );
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
