import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';

function Ship(props) {
  const { data } = props;
  return (
    <li className="Ship">
      <h2 className="Ship__name">{data.name}</h2>
      <Palette colors={data.colors} />
    </li>
  );
}

Ship.propTypes = {
  data: PropTypes.object.isRequired
};

export default Ship;
