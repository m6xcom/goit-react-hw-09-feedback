import React from "react";
import PropTypes from "prop-types";
import style from "./SectionTittle.module.css";

const SectionTittle = ({ title, children }) => {
  return (
    <section className={style.main}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionTittle;

SectionTittle.defaultProps = {
  title: "Please leave feedback",
};

SectionTittle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
