import React, { Component } from 'react';
import css from 'styles/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <ul className={css.buttons}>
          {options.map((option, index) => (
            <li key={index}>
              <button
                className={css.button}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
