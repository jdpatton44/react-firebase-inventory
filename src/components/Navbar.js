import React from 'react'

class Navbar extends React.Component {
    handleInventoryClick = (event) => {
        this.props.setNavSelection('inventory')
        this.props.stopEditing()
    }
    handlePackagesClick = (event) => {
        this.props.setNavSelection('packages')
        this.props.stopEditing()
    }
    handleMailingsClick = (event) => {
        this.props.setNavSelection('mailings')
        this.props.stopEditing()
    }
    
    render() {
        return (
            <nav >
                <ul className="nav nav-tabs">
                    <li className="navbar-brand logo">
                        <span className="client-name">{this.props.clientId}</span>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handleInventoryClick} style={{fontSize: 24}} className="nav-link ml-2 mr-2 bg-white border" href="">
                        Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handlePackagesClick} style={{fontSize: 24}} className="nav-link ml-2 mr-2 bg-white border" href="">
                            Packages
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.handleMailingsClick} style={{fontSize: 24}} className="nav-link ml-2 mr-2 bg-white border" href="">
                        Mailings
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;