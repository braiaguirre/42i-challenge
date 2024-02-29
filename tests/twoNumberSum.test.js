import { test, expect } from 'vitest';
import twoNumberSum from '../algorithms/twoNumberSum';

test('Case 1 / Pair exists at the beginning of the array.', () => {
  const numbers = [2, 7, 11, 15];
  const targetSum = 9;
  expect(twoNumberSum(numbers, targetSum)).toEqual([2, 7]);
});

test('Case 2 / Pair does not exists in the array.', () => {
  const numbers = [3, 6, 8, 10];
  const targetSum = 15;
  expect(twoNumberSum(numbers, targetSum)).toEqual([]);
});

test('Case 3 / Pair exists in the middle of the array.', () => {
  const numbers = [3, 6, 8, 10];
  const targetSum = 14;
  expect(twoNumberSum(numbers, targetSum)).toEqual([6, 8]);
});

test('Case 4 / Pair exists in the middle of the array, not next to each other.', () => {
    const numbers = [3, 6, 7, 8, 10];
    const targetSum = 14;
    expect(twoNumberSum(numbers, targetSum)).toEqual([6, 8]);
});

test('Case 5 / Pair exists at the end of the array.', () => {
  const numbers = [1, 3, 5, 7, 9];
  const targetSum = 16;
  expect(twoNumberSum(numbers, targetSum)).toEqual([7, 9]);
});

test('Case 6 / Empty array.', () => {
  const numbers = [];
  const targetSum = 6;
  expect(twoNumberSum(numbers, targetSum)).toEqual([]);
});

test('Case 6 / Single element array.', () => {
  const numbers = [10];
  const targetSum = 10;
  expect(twoNumberSum(numbers, targetSum)).toEqual([]);
});