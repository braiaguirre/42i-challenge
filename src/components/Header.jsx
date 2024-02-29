import styles from './Header.module.css';

const Header = ({ setChallenge }) => {
  
    const handleSetChallenge = (e) => setChallenge(e.target.value);

    return (
        <>
            <div className={ styles.container }>
                <h1>42i Challenge</h1>
                <select onChange={ handleSetChallenge }>
                    <option value="twoNumberSum">Two Number Sum</option>
                    <option value="nonConstructibleChange">Non-Constructible Change</option>
                </select>
            </div>
        </>
    )
}

export default Header;
