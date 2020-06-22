import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Mailings from "./Mailings";
import Inventory from "./Inventory";
import Navbar from "./Navbar";
//import Material from "./Material";
import Segments from "./Segment";
import base from "../base";

class App extends React.Component {
  state = {
    segments: [ 
      {
        name: '6A6B',
        materialList: [1,1,1]
      },
    {
      name: '6C6D',
      materialList: [2,2,2]
    } 
  ],
    materials: [
        {
          name: "#10 window Important Information About Your Monthly Gift",
          image: "/images/MSF-1.jpg",
          quantity: 9719,
          finaleNumber: 10426
        },
        {
          name: "#10 window Your Gift Receipt Enclosed",
          image: "/images/MSF-2.jpg",
          quantity: 28051,
          finaleNumber: 10223,
        },
        {
          name: "#10 window Important Information About Your Monthly Gift",
          image: "/images/MSF-3.jpg",
          quantity: 9719,
          finaleNumber: 15000,
        },
        {
          name: "#10 window Important Information About Your Monthly Gift",
          image: "/images/MSF-4.jpg",
          quantity: 267000,
          finaleNumber: 13382
        },
      ],
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

  addMailing = (mailing) => {
    const mailings = [ ...this.state.mailings];
    mailings.push(mailing);
    let materials = this.state.materials
    const materialList = this.state.segments.filter(segment => segment.name === mailing.segment).map(segment => segment.materialList);
    
    console.log(materialList)
    this.setState( { mailings });
  }

  // componentDidMount() {
  //   const { params } = this.props.match;

  //   // first reinstate our localStorage
  //   const localStorageRef = localStorage.getItem(params.clientId);
  //   if (localStorageRef) {
  //     this.setState({ materials: JSON.parse(localStorageRef) });
  //   }
  
  //   this.ref = base.syncState(`${params.clientId}/clients`, {
  //     context: this,
  //     state: "clients"
  //   });
  // }

  componentDidUpdate() {
    localStorage.setItem(
      `${this.props.match.params.clientId}`,
      JSON.stringify(this.state)
    );
  }

  // componentDidUpdate() {
  //   localStorage.setItem(
  //     this.props.match.params.clientId,
  //     JSON.stringify(this.state.order)
  //   );
  // }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  render() {
    return (
      <div className="catch-of-the-day">
        <Navbar />
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
