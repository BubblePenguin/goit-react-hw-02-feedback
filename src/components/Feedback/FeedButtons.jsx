export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h3>Gimme Feedback</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <button name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="mid" onClick={onLeaveFeedback}>
          Mid
        </button>
        <button name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};
