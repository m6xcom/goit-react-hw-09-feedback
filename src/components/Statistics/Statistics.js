import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.statisticsList}>
      {total !== 0 ? (
        <>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>Bad:{bad}</p>
          </li>
          <li>
            <p>Total:{total}</p>
          </li>
          <li>
            <p>Positive feedback:{positivePercentage}%</p>
          </li>
        </>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </ul>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
