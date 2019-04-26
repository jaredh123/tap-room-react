import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <div>
      <h4>${props.price} <strong>{props.name}</strong> – {props.alcoholContent}%</h4>
      <h5><em>{props.brand}</em></h5>
    </div>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Ticket;
