import React from "react";
import PropTypes from "prop-types";
import Mailings from "./Mailings";
import Inventory from "./Inventory";
import Navbar from "./Navbar";
import Segments from "./Segment";
import base from "../base";

class App extends React.Component {
  state = {
    segments: [],
    materials: [],
    mailings: [],
  };

  addMaterial = material => {
    // 1. Take a copy of the existing state
    const materials = [ ...this.state.materials ];
    // 2. Add our new material to that materials variable
    materials.push(material)
    // 3. Set the new materials object to state
    this.setState({ materials });
  };
 
  addSegment = (segment) => {
    const segments = [ ...this.state.segments ]; 
    segments.push(segment);
    this.setState( { segments });
  };

  updateMaterial = (materialInput, quantity) => {
    const materials = [ ...this.state.materials ];
    const index = materials.findIndex(m => m.finaleNumber === materialInput);
    console.log(index);
    let materialToUpdate = materials.filter(m => m.finaleNumber === materialInput)[0];
    if (index > -1) {
      materials.splice(index, 1);
    }
    console.log(materialToUpdate)
    materialToUpdate.quantity -= quantity;
    console.log(materialToUpdate.quantity)
    materials.push(materialToUpdate);
    this.setState( {materials} )
  }

  addMailing = (mailing) => {
    const mailings = [ ...this.state.mailings];
    mailings.push(mailing);
    const materialList = this.state.segments.filter(segment => segment.name === mailing.segment).map(segment => segment.materialList);
    materialList[0].map(m => this.updateMaterial(m, mailing.quantity));
    this.setState( { mailings });
  }

  componentDidMount() {
    const { params } = this.props.match;

    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.clientId);
    if (typeof(localStorageRef) !== 'undefined') {
      this.setState( JSON.parse(localStorageRef) );
    }
  
    base.syncState(`${params.clientId}/materials`, {
      context: this,
      state: 'materials',
      asArray: true,
    });
    base.syncState(`${params.clientId}/segments`, {
      context: this,
      state: 'segments',
      asArray: true,
    });
    base.syncState(`${params.clientId}/mailings`, {
      context: this,
      state: 'mailings',
      asArray: true,
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.clientId,
      JSON.stringify(this.state)
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="container">
        <Navbar 
          clientId = {this.props.match.params.clientId}
        />
          <Inventory
            materials = {this.state.materials}
            addMaterial = {this.addMaterial}
            />
          <Segments 
            materials = {this.state.materials}
            segments = {this.state.segments}
            addSegment = {this.addSegment}
          />
          <Mailings
            materials = {this.state.materials}
            segments = {this.state.segments}
            mailings = {this.state.mailings}
            addMailing = {this.addMailing}
          />
      </div>
    );
  }
}

export default App;
