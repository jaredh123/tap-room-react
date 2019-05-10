import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  var kegStyle = {
    paddingLeft: '5px',
    // color: '#F30000'
  };

  // const kegInformation =
  //   <div style={kegStyle}>
  //     <div>${props.price} <strong>{props.name}</strong> –– {props.alcoholPercent}%</div>
  //     <div><em>{props.brand}</em></div>
  //     <div>Pints: {props.pints}</div>
  //     <br></br>
  //   </div>;

  // if (props.currentRouterPath === '/admin') {
  //   return (
  //     <div onClick={() => {sellPint();}}>
  //       {kegInformation}
  //     </div>
  //   );
  // }
  // else {
    return (
      <div>
        <div>${props.price} <strong>{props.name}</strong> –– {props.alcoholPercent}%</div>
        <div><em>{props.brand}</em></div>
        <div>Pints: {props.pints}</div>
        <button onClick={() => {props.onKegClicked(props.kegId);}}>Sell Pint</button>
        <br></br>
        <br></br>
      </div>
    );
  }
// }

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholPercent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pints: PropTypes.number,
  kegId: PropTypes.string.isRequired,
  onKegClicked: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default Keg;
