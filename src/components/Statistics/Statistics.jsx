import React from 'react';
import styles from 'styles/Statistics.module.css';

export const Statistics = ({ good, neutral, bad,total, positivePercentage }) => {

    return (
        <div className={styles.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
        </div>
    );
}
