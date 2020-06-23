import React from 'react'
import AddMailing from './AddMailing'

class Mailings extends React.Component {

    render() {
        return(
            <div>
                <h3>Mailings</h3>
                <table className="table  table-striped table-hover table-bordered">
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
                <AddMailing segments={this.props.segments} addMailing={this.props.addMailing}/>
            </div>
        )
    }
}

export default Mailings;

