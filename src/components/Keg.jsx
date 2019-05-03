import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h4>${props.price} <strong>{props.name}</strong> – {props.alcoholPercent}%</h4>
      <h5><em>{props.brand}</em></h5>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholPercent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Keg;
