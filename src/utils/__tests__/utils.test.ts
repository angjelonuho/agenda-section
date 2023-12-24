import debounce from  "../debounceUtil"

// Mock the timer functions
jest.useFakeTimers();

describe('debounce function', () => {
  it('should call the function after the specified timeout', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 500);
    debouncedFunction();
    jest.advanceTimersByTime(500);
    expect(originalFunction).toHaveBeenCalled();
  });

  it('should debounce multiple calls and only execute the last one', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 500);

    debouncedFunction();
    jest.advanceTimersByTime(200);
    debouncedFunction();
    jest.advanceTimersByTime(200);
    debouncedFunction();

    jest.advanceTimersByTime(500);

    expect(originalFunction).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer for subsequent calls', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 500);

    debouncedFunction();

    jest.advanceTimersByTime(200);
    
    debouncedFunction();

    jest.advanceTimersByTime(200);
    expect(originalFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(originalFunction).toHaveBeenCalled();
  });

});
