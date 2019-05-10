import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import KegList from './KegList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <Link to="/newKeg">Add new Keg</Link>

      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
