import React from 'react';
import Header from './Header';
import KegList from './KegList';

function App() {
  var myStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: 10,
  };
  return (
    <div style={myStyle}>
      <Header/>
      <KegList/>
    </div>
  );
}

export default App;
