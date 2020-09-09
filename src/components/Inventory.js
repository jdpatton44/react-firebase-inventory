import React from 'react';
import AddMaterialForm from './AddMaterialForm';
import ChangeQuantityForm from './ChangeQuantityForm';
import Tooltip from './Tooltip'

import { FaPencilAlt, FaTrashAlt, FaRegPlusSquare } from 'react-icons/fa';

class Inventory extends React.Component {

    render() {
        return(
            <div>
                <h2 className="cursive-heading">Inventory</h2>
                <table className="table  table-striped table-hover table-bordered">
                    <thead className="">
                        <tr>
                            <th>Finale #</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.materials && this.props.materials.map((m, i) => (
                            <tr key={m.finaleNumber}>
                                <td>{m.finaleNumber}</td>
                                <td>{m.name}</td>
                                <td>{m.quantity.toLocaleString()}</td>
                                <td className="d-flex justify-content-around">
                                    <button onClick={() => {this.props.setEditingMaterialFlag(m.finaleNumber)}}>
                                        <Tooltip text="Edit Material">
                                            <FaPencilAlt className="m-1" color="#b8b800" size={20} />
                                        </Tooltip>
                                    </button>
                                    <button onClick={() => {this.props.setChangeQuantityFlag(m.finaleNumber)}}>
                                        <Tooltip text="Change Quantity">
                                            <FaRegPlusSquare className="m-1" color="#8B0000" size={20} />
                                        </Tooltip>
                                    </button>
                                    <button onClick={() => {if(window.confirm('Are you sure you want to remove this???')){this.props.removeMaterial(m.finaleNumber)};}}>
                                        <Tooltip text="Delete Material">
                                            <FaTrashAlt className="m-1" color="#6f7467" size={20} />
                                        </Tooltip>
                                    </button>

                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                {this.props.changeQuantityFlag 
                ? <ChangeQuantityForm 
                addMaterial={this.props.addMaterial} 
                changeQuantityFlag = {this.props.changeQuantityFlag} 
                updateMaterial = {this.props.updateMaterial}
                updateMaterialQuantity = {this.props.updateMaterialQuantity}
                stopEditing = {this.props.stopEditing}
                materials={this.props.materials}/> 
                : <AddMaterialForm 
                    addMaterial={this.props.addMaterial} 
                    editingMaterialFlag = {this.props.editingMaterialFlag} 
                    updateMaterial = {this.props.updateMaterial}
                    stopEditing = {this.props.stopEditing}
                    materials={this.props.materials}/>
                
                }
            </div>
        )
    }
}

export default Inventory;