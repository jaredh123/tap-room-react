import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
    <div>
      <style jsx>{`
        div {
          background-color: orange;
          padding-left: 4px;
        }
      `}</style>
      <h5>${props.price} <strong>{props.name}</strong> –– {props.alcoholPercent}%</h5>
      <h6><em>{props.brand}</em></h6>
    </div>;
    if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {alert('You just clicked the keg belonging to ' + props.brand);}}>
        {kegInformation}
      </div>
    );
  }
  else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholPercent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Keg;
