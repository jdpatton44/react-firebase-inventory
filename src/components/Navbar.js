import React from 'react'

class Navbar extends React.Component {
    showInventory = true;
    showPackages = false;
    showMailings = false;

    toggleDisplay = (event) => {
        console.log(event)
    }
      

    render() {
        return (
            <div >
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <strong>{this.props.clientId}</strong>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => {this.showInventory = !this.showInventory}} className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                        Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => {this.showPackages = !this.showPackages}} className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                            Packages
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => {this.showMailings = !this.showMailings}} className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                        Mailings
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;