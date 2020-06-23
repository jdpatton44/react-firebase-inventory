import React from 'react';
import AddMaterialForm from './AddMaterialForm';

class Inventory extends React.Component {

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
                                <td>
                                    <button onClick={() => this.props.updateMaterial(m.finaleNumber)}>➕</button>
                                    <button onClick={() => this.props.removeMaterial(m.finaleNumber)}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddMaterialForm addMaterial={this.props.addMaterial} />
            </div>
        )
    }
}

export default Inventory;