import cleanArray from '../utils/cleanArray';
import nonConstructibleChange from '../utils/nonConstructibleChange';

import { useRef, useState } from 'react';

import styles from './NonConstructibleChange.module.css';

const NonConstructibleChange = () => {
  const arrayRef = useRef();
  const resultRef = useRef();
  let [array, setArray] = useState([]);
  
  const handleSetArray = (e) => setArray(cleanArray(e.target.value));
  const handleCalculate = () => resultRef.current.value = nonConstructibleChange(array);
  const handleClear = () => {
    arrayRef.current.value = '';
    resultRef.current.value = '';
  }

  return (
    <>
      <div className={ styles.container }>
        <h3>Two Number Sum</h3>
        <p>Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).</p>

        <h4>Array of positive integers, separated by any character</h4>
        <input type="text" ref={ arrayRef } onChange={ handleSetArray } />
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

export default NonConstructibleChange;