/* eslint-disable react/prop-types */
import React from 'react';

const SoloCounter = ({ handleCounterDec, handleCounterInc, counter }) => {
    return (
        <div style={styles.container}>
            <div style={styles.counterContainer}>
                <button style={styles.button} onClick={handleCounterDec}>-</button>
                <span style={styles.counter}>{counter}</span>
                <button style={styles.button} onClick={handleCounterInc}>+</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    counterContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    counter: {
        padding: '10px 20px',
        fontSize: '16px',
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default SoloCounter;
