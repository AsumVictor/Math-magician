import operate from './Operate';
import Big from 'big.js';

describe('operate', () => {
  test('should add two numbers correctly', () => {
    expect(operate('2', '3', '+')).toBe(Big('5').toString());
  });

  test('should subtract two numbers correctly', () => {
    expect(operate('5', '3', '-')).toBe(Big('2').toString());
  });

  test('should multiply two numbers correctly', () => {
    expect(operate('2', '3', 'x')).toBe(Big('6').toString());
  });

  test('should divide two numbers correctly', () => {
    expect(operate('6', '2', '÷')).toBe(Big('3').toString());
  });

  test('should handle division by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('should calculate modulo correctly', () => {
    expect(operate('7', '3', '%')).toBe(Big('1').toString());
  });

  test('should handle modulo by zero', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error for unknown operations', () => {
    expect(() => operate('2', '3', '&')).toThrow("Unknown operation '&'");
  });
});
