import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorSquare from './ColorSquare';
import './Palette.css';

class Palette extends Component {
  render() {
    const { colors } = this.props;
    return (
      <ol className="Palette">
        {colors.map(color => (
          <ColorSquare color={color} />
        ))}
      </ol>
    );
  }
}

Palette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Palette;
