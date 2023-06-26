import PropTypes from 'prop-types';
export const Statistics = ({ good, mid, bad, total, positivePercentage }) => {
  return (
    <div>
      <h3>Statistics</h3>

      {total ? (
        <ul style={{ listStyle: 'none' }}>
          <li>Good:{good}</li>
          <li>Mid:{mid}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Score:{positivePercentage}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
};

const Notification = ({ message = 'There is no feedback' }) => {
  return <p>{message}</p>;
};

Statistics.propTypes = {
  good: PropTypes.number,
  mid: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
