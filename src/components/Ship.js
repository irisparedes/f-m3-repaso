import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';

function Ship(props) {
  const { data } = props;
  console.log(data);
  return (
    <li>
      <h2>{data.name}</h2>
      <Palette colors={data.colors} />
    </li>
  );
}

Ship.propTypes = {
  data: PropTypes.object.isRequired
};

export default Ship;
