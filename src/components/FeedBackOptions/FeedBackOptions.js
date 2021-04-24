import React from "react";
import PropTypes from "prop-types";
import style from "./FeedBackOptions.module.css";

const FeedBackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul onClick={onLeaveFeedback} className={style.buttonsList}>
      {options.map((el) => (
        <li key={el}>
          <button name={el}>{el[0].toUpperCase() + el.slice(1)}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
