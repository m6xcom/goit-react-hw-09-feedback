import React from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={style.message}>{message}</p>;
};

export default Notification;

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};
