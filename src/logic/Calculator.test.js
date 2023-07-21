import calculate from './Calculator';

describe('calculate function', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number input', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '7');
    expect(result).toEqual({
      total: '123',
      next: '4567',
      operation: '+',
    });
  });

  it('should handle "." button', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '.');
    expect(result).toEqual({
      total: '123',
      next: '456.',
      operation: '+',
    });
  });

  it('should handle "=" button', () => {
    const result = calculate({ total: '12', next: '3', operation: '-' }, '=');
    expect(result).toEqual({
      total: '9',
      next: null,
      operation: null,
    });
  });

  it('should handle "+/-" button', () => {
    const result = calculate({ total: '10', next: '5', operation: 'x' }, '+/-');
    expect(result).toEqual({
      total: '10',
      next: '-5',
      operation: 'x',
    });
  });

  it('should handle consecutive operations', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });
});
