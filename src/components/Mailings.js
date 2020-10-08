import React from 'react'
import AddMailing from './AddMailing'
import Tooltip from './Tooltip'
import { FaTrashAlt} from 'react-icons/fa';

class Mailings extends React.Component {

    render() {
        return(
            <div>
                <h2 className="cursive-heading">Mailings</h2>
                <AddMailing segments={this.props.segments} addMailing={this.props.addMailing}/>
                <table className="table  table-striped table-hover table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Mail Date</th>
                            <th>Package</th>
                            <th>Quantity Mailed</th>
                            </tr>
                    </thead>
                    <tbody>
                        {this.props.mailings && this.props.mailings.map((mailing, i) => (
                            <tr key={i}>
                                <td>{mailing.date}</td>
                                <td>{mailing.segment}</td>
                                <td>{mailing.quantity.toLocaleString()}</td>
                                <td>
                                    <button onClick={() => {if(window.confirm('Are you sure you want to remove this mailing???')){this.props.removeMailing(i)};}}>
                                        <Tooltip text="Delete Mailing and add stock back to Inventory.">
                                            <FaTrashAlt className="m-1" color="#6f7467" size={20} />
                                        </Tooltip>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Mailings;

