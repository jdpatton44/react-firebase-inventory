import React from 'react';
import AddPackageForm from './AddPackageForm';
import EditPackageForm from './EditPackageForm';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Tooltip from './Tooltip'

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
                {this.props.editingSegmentFlag 
                
                ? <EditPackageForm 
                    addSegment={this.props.addSegment} 
                    materials={this.props.materials} 
                    editingSegmentFlag = {this.props.editingSegmentFlag}
                    segments={this.props.segments}
                    stopEditing = {this.props.stopEditing}
                    updateSegment = {this.props.updateSegment}
                />
                : <AddPackageForm 
                addSegment={this.props.addSegment} 
                materials={this.props.materials} 
                editingSegmentFlag = {this.props.editingSegmentFlag}
                segments={this.props.segments}
                stopEditing = {this.props.stopEditing}
                updateSegment = {this.props.updateSegment}
            />}
                <div className="container d-flex flex-wrap">
                    {this.props.segments.map((seg) => (
                    <div className="card m-2 bg-light col-8" key={seg.name}>
                        <div className="d-flex flex-row">
                            <h4 className="m-2 w-50">{seg.name}</h4>
                            <button onClick={() => {if(window.confirm('Are you sure you want to delete this package???')){this.props.removeSegment(seg.name)};}} className="w-20 btn btn-clear ml-auto">
                                <Tooltip text="Delete Package">
                                    <FaTrashAlt className="m-1" color="#b8b800" size={20} />
                                </Tooltip>
                            </button>
                            <button onClick={() => {this.props.setEditingSegmentFlag(seg.id)}} className="w-20 btn btn-clear ml-auto">
                                <Tooltip text="Edit Package">
                                    <FaPencilAlt className="m-1" color="#b8b800" size={20} />
                                </Tooltip>
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