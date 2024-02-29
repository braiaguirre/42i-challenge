import styles from './NonConstructibleChange.module.css';

const NonConstructibleChange = () => {
  return (
    <>
      <div className={ styles.container }>
        <h3>Non-Constructible Change</h3>
        <p>Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).</p>
        
      </div>
    </>
  )
}

export default NonConstructibleChange;