import React, { createElement } from 'react';
import AddSegmentForm from './AddSegmentForm';

class Segment extends React.Component {
    findMaterialName = (finaleNumber) => {
        const material = Object.values(this.props.materials).filter(m => m.finaleNumber === finaleNumber)[0]
        if( material) {
            return material.name
        }
        else {
            return  ''
        }
    }

    render() {
        return(
            <div>
                <h3>Packages</h3>
                <div className="container d-flex justify-content-center">
                    {this.props.segments.map((seg) => (
                    <div className="card m-2 bg-light flex-fill flex-wrap" key={seg.name}>
                        <h4>{seg.name}</h4>
                        <ul>
                            {seg.materialList && seg.materialList.map(m => 
                                <li key={m} >{m} - {this.findMaterialName(m)}</li>)}
                        </ul>
                    </ div>
                ))}
                </div>
                <AddSegmentForm addSegment={this.props.addSegment} materials={this.props.materials} />
            </div>
        )
    }
}

export default Segment;