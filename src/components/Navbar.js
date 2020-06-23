import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    handleInventoryClick = (event) => {
        this.props.setNavSelection('inventory')
    }
    handlePackagesClick = (event) => {
        this.props.setNavSelection('packages')
    }
    handleMailingsClick = (event) => {
        this.props.setNavSelection('mailings')
    }
    
    
    render() {
        return (
            <div >
                <ul className="nav nav-tabs">
                    <li className="navbar-brand">
                        <strong>{this.props.clientId}</strong>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handleInventoryClick} className="nav-link ml-2 mr-2 bg-white border" href="">
                        Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handlePackagesClick} className="nav-link ml-2 mr-2 bg-white border" href="">
                            Packages
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handleMailingsClick} className="nav-link ml-2 mr-2 bg-white border" href="">
                        Mailings
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;