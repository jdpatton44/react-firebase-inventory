import React from 'react'

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
            <nav >
                <ul className="nav nav-tabs">
                    <li className="navbar-brand logo">
                        <strong>{this.props.clientId}</strong>
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