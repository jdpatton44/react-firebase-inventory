import React from 'react';
import AddMaterialForm from './AddMaterialForm';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

class Inventory extends React.Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    render() {
        return(
            <div>
                <h3>Inventory</h3>
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
                                        <FaPencilAlt className="m-1" color="#b8b800" size={20} />
                                    </button>
                                    <button onClick={() => {if(window.confirm('Are you sure?')){this.props.removeMaterial(m.finaleNumber)};}}>
                                        <FaTrashAlt className="m-1" color="#6f7467" size={20} />
                                    </button>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                <AddMaterialForm 
                    addMaterial={this.props.addMaterial} 
                    editingMaterialFlag = {this.props.editingMaterialFlag} 
                    updateMaterial = {this.props.updateMaterial}
                    stopEditing = {this.props.stopEditing}
                    materials={this.props.materials}/>
            </div>
        )
    }
}

export default Inventory;