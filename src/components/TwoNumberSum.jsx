import cleanArray from '../utils/cleanArray';
import twoNumberSum from '../../algorithms/twoNumberSum';

import { useRef, useState } from 'react';

import styles from './TwoNumberSum.module.css';

const TwoNumberSum = () => {
  const arrayRef = useRef();
  const targetSumRef = useRef();
  const resultRef = useRef();
  let [array, setArray] = useState([]);
  let [targetSum, setTargetSum] = useState(0);
  
  const handleSetArray = (e) => setArray(cleanArray(e.target.value));
  const handleSetTargetSum = (e) => setTargetSum(e.target.value);
  const handleCalculate = () => resultRef.current.value = `[${twoNumberSum(array, targetSum)}]`;
  const handleClear = () => {
    arrayRef.current.value = '';
    targetSumRef.current.value = '';
    resultRef.current.value = '';
  }

  return (
    <>
      <div className={ styles.container }>
        <h3>Two Number Sum</h3>
        <p>Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.</p>

        <h4>Array of integers, separated by any character</h4>
        <input type="text" ref={ arrayRef } onChange={ handleSetArray } />
        <h4>Target sum</h4>
        <input type="number" ref={ targetSumRef } onChange={ handleSetTargetSum } />
        <h4>Result</h4>
        <input type="text" ref={ resultRef } disabled />
        <div>
          <button onClick={ handleCalculate }>Calculate</button>
          <button onClick={ handleClear }>Clear</button>
        </div>

      </div>
    </>
  )
}

export default TwoNumberSum;