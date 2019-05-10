import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {

  return (
    <div>
      <h2>Menu</h2>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          alcoholPercent={keg.alcoholPercent}
          price={keg.price}
          pints={keg.pints}
          onKegClicked={props.onKegClicked}
          currentRouterPath={props.currentRouterPath}
          key={keg.id}
          kegId={keg.id}/>
      )}
      <br></br>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegClicked: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default KegList;
