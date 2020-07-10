import React from 'react';
import AddSegmentForm from './AddSegmentForm';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

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
                <h2 className="cursive-heading">Packages</h2>
                <AddSegmentForm 
                    addSegment={this.props.addSegment} 
                    materials={this.props.materials} 
                    editingSegmentFlag = {this.props.editingSegmentFlag}
                    segments={this.props.segments}
                    stopEditing = {this.props.stopEditing}
                />
                <div className="container d-flex flex-wrap">
                    {this.props.segments.map((seg) => (
                    <div className="card m-2 bg-light col-8" key={seg.name}>
                        <div className="d-flex flex-row">
                            <h4 className="m-2 w-50">{seg.name}</h4>
                            <button onClick={() => {if(window.confirm('Are you sure you want to delete this package???')){this.props.removeSegment(seg.name)};}} className="w-20 btn btn-clear ml-auto">
                                <FaTrashAlt className="m-1" color="#b8b800" size={20} />
                            </button>
                            <button onClick={() => {this.props.setEditingSegmentFlag(seg.id)}} className="w-20 btn btn-clear ml-auto">
                                <FaPencilAlt className="m-1" color="#b8b800" size={20} />
                            </button>
                        </div>
                        <ul>
                            {seg.materialList && seg.materialList.map(m => 
                                <li key={m} >{m} - {this.findMaterialName(m)}</li>)}
                        </ul>
                    </ div>
                ))}
                </div>
                
            </div>
        )
    }
}

export default Segment;