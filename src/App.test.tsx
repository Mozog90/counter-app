import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import App from './App';

describe('Counter App', () => {

  // Test 1: Starting state
  test('displays the initial count and buttons', () => {
    render(<App />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  // Test 2: Increment
  test('increments the count from 0 to 1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  // Test 3: Decrement
  test('decrements the count from 0 to -1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  // Test 4: Reset
  test('resets the count back to 0', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  // Test 5: Multiple actions
  test('handles multiple actions in sequence', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

});