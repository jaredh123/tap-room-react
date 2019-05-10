import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _alcoholPercent = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, alcoholPercent: _alcoholPercent.value, price: _price.value, id: v4()});
    _name = '';
    _brand = '';
    _alcoholPercent = '';
    _price = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}} />
        <br></br>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}} />
        <br></br>
        <input
          type='number'
          id='alcoholPercent'
          placeholder='Alcohol percent %.'
          ref={(input) => {_alcoholPercent = input;}} />
          <br></br>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}} />
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
