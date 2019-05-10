import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          alcoholPercent={keg.alcoholPercent}
          price={keg.price}
          currentRouterPath={props.currentRouterPath}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default KegList;
