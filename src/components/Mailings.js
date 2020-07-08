import React from 'react'
import AddMailing from './AddMailing'

class Mailings extends React.Component {

    render() {
        return(
            <div>
                <h3>Mailings</h3>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Mailings;

