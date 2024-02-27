import React from 'react';
import css from 'styles/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};