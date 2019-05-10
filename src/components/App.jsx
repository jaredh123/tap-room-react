import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleSellPint(kegId) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[kegId].pints = newMasterKegList[kegId].pints - 1;
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return (
      <div>
      <style jsx>{`
        div {
          background-color: #535353;
          padding: 10px;
        }
      `}</style>
      <style global jsx>{`
        div {
          color: #E0E0E0;
        }
      `}</style>
        <Header/>
        <br></br>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} onKegClicked={this.handleSellPint} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
