import React, { Component } from 'react';
import styles from 'styles/Statistics.module.css';

export class Statistics extends Component {
    render() {
        const { good, neutral, bad } = this.props;
        const total = good + neutral + bad;
        const positivePercentage = total ? (good / total) * 100 : 0;

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
}

