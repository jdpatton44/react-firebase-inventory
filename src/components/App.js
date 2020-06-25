import React from "react";
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
    showInventory: true,
    showPackages: false,
    showMailings: false,
    editingMaterialFlag: '',
    };
  
    setNavSelection = navRef => {
    if (navRef  === 'inventory') {
      this.setState( {
        showInventory: true,
        showMailings: false,
        showPackages: false,
      })
    }
    else if (navRef === 'packages') {
      this.setState( {
        showInventory: false,
        showMailings: false,
        showPackages: true,
      })
    }
    else {
      this.setState( {
        showInventory: false,
        showMailings: true,
        showPackages: false,
      })
    }
  }


  // add a new material to state 
  addMaterial = (material) => {
      // Take a copy of the existing materials state
      const materials = [ ...this.state.materials ];
      // Check to see if the finale number is already in use
      const index = materials.findIndex(m => m.finaleNumber === material.finaleNumber);
      if (index > -1) {
        return alert(`Finale Item #${material.finaleNumber} is already in the database with the description "${materials[index].name}". \nWe have ${materials[index].quantity.toLocaleString()} in stock. Did you mean to update this material?`)
      }
      // Add our new material to that materials variable
      materials.push(material)
      // Set the new materials to state
      this.setState({ materials });
    };
  
  // remove a material from state
  removeMaterial = materialToDelete => {
      // get a copy of the existing materials state 
      const materials = [ ...this.state.materials ];
      // find the index of the material to be removed
      const index = materials.findIndex(m => m.finaleNumber === materialToDelete);
      // if the material exists, remove it
      if (index > -1) {
        materials.splice(index, 1);
      }
      // set the new materials array to state 
      this.setState( {materials} );
    };

  // remove a clients segment (package)
  removeSegment = (segmentToDelete) => {
    // get a copy of the segments in state 
    const segments = [ ...this.state.segments ]; 
    // find the index of the segment to be removed 
    const index = segments.findIndex(s => s.name === segmentToDelete)
    // if the material exists, remove it
    if (index > -1) {
      segments.splice(index, 1);
    }
    // set the new materials array to state 
    this.setState( {segments} );
  };
  
  // add a segment to state 
  addSegment = (segment) => {
      // get a copy of the segments in state 
      const segments = [ ...this.state.segments ]; 
      // add the new segment to that array
      segments.push(segment);
      // set the new array to state 
      this.setState( { segments });
    };
  setEditingMaterialFlag = (finaleNumber) => {
    this.setState( {editingMaterialFlag: finaleNumber} )
  }
  stopEditing = () => {
    this.setState( { editingMaterialFlag: '' } );
  }
  
  // update a materials by replacing it
  updateMaterial = (updatedMaterial) => {
    // get a copy of the materials in state 
    const materials = [ ...this.state.materials ];
    // find the index of the material to update 
    const index = materials.findIndex(m => m.finaleNumber === updatedMaterial.finaleNumber);
    // remove the material to update from the materials array 
    if (index > -1) {
      materials.splice(index, 1);
    }
    // push the new material on the materials array
    materials.push(updatedMaterial);
    // set materials state with the updated array
    this.setState( {materials, editingMaterialFlag: ''}  )
  };

  // update a materials quantity by subtracting quantity
  updateMaterialQuantity = (materialInput, quantity) => {
        // get a copy of the materials in state 
        const materials = [ ...this.state.materials ];
        // find the index of the material to update 
        const index = materials.findIndex(m => m.finaleNumber === materialInput);
        // remove the material to update from the materials array 
        let materialToUpdate = materials.filter(m => m.finaleNumber === materialInput)[0];
        if (index > -1) {
          materials.splice(index, 1);
        }
        // reduce the quantity of the material 
        materialToUpdate.quantity -= quantity;
        // push the material back on the materials array
        materials.push(materialToUpdate);
        // set materials state with the updated array
        this.setState( {materials} )
    };
  
  // add a new mailing to state 
  addMailing = (mailing) => {
      // get a copy of the existing mailings in state 
      const mailings = [ ...this.state.mailings];
      // add the new mailing to the array
      mailings.push(mailing);
      //get the list of materials from that mailing 
      const materialList = this.state.segments.filter(segment => segment.name === mailing.segment).map(segment => segment.materialList);
      // update the materials based on the mailing 
      materialList[0].map(m => this.updateMaterialQuantity(m, mailing.quantity));
      // set state to the updated mailings array
      this.setState( { mailings });
    }
  
  componentDidMount() {
      // get the params from react router
      const { params } = this.props.match;
  
      // first reinstate our localStorage
      const localStorageRef = localStorage.getItem(params.clientId);
      // if the client exists in local storage update from there 
      if (typeof(localStorageRef) !== 'undefined') {
        this.setState( JSON.parse(localStorageRef) );
      }
      // get the clients materials from firebase
      base.syncState(`${params.clientId}/materials`, {
        context: this,
        state: 'materials',
        asArray: true,
      });
      // get the clients segments from firebase
      base.syncState(`${params.clientId}/segments`, {
        context: this,
        state: 'segments',
        asArray: true,
      });
      // get the clients mailings from firebase
      base.syncState(`${params.clientId}/mailings`, {
        context: this,
        state: 'mailings',
        asArray: true,
      });
  }
    
  // update local storage when state is updated
  componentDidUpdate() {
      localStorage.setItem(
        this.props.match.params.clientId,
        JSON.stringify(this.state)
      )
    }
  
  // remove bindings
  componentWillUnmount() {
      base.removeBinding(this.ref);
    }

  render() {
    return (
        <div className={this.state.theme}>
          <div className="container">
            <Navbar 
              theme = {this.state.theme}
              toggleTheme = {this.toggleTheme}
              setNavSelection = {this.setNavSelection}
              clientId = {this.props.match.params.clientId}
              showInventory = {this.state.showInventory}
              showPackages = {this.state.showPackages}
              showMailings = {this.state.showMailings}
            />
              {this.state.showInventory && <Inventory
                editingMaterialFlag = {this.state.editingMaterialFlag}
                setEditingMaterialFlag = {this.setEditingMaterialFlag}
                stopEditing = {this.stopEditing}
                materials = {this.state.materials}
                addMaterial = {this.addMaterial}
                updateMaterial = {this.updateMaterial}
                removeMaterial = {this.removeMaterial}
                />}
              {this.state.showPackages && <Segments 
                materials = {this.state.materials}
                segments = {this.state.segments}
                addSegment = {this.addSegment}
                removeSegment = {this.removeSegment}
              />}
              {this.state.showMailings && <Mailings
                materials = {this.state.materials}
                segments = {this.state.segments}
                mailings = {this.state.mailings}
                addMailing = {this.addMailing}
              />}
          </div>
        </div>
    );
  }
}

export default App;
