import React from 'react';
import PropTypes from 'prop-types';
import './ColorSquare.css'

function ColorSquare(props) {
  const { color } = props;
  return (
    <li
      className="ColorSquare"
      style={{
        backgroundColor: `#${color}`,
      }}
    />
  );
}

ColorSquare.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorSquare;
