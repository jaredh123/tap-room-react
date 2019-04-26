import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App() {
  var myStyle = {
    backgroundColor: "darkblue",
    color: "white",
    padding: 10,
  }
  return (
    <div style={myStyle}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
