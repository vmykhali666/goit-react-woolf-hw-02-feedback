import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = event => {
    setFeedback(event.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Feedback
        text="Please leave feedback"
        value={feedback}
        onChange={handleFeedbackChange}
      />
    </div>
  );
};
