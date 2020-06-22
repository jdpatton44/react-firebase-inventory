import React from 'react'

class Navbar extends React.Component {



    render() {
        return (
            <div >
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <strong>{this.props.params}</strong>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                        Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                            Packages
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link ml-2 mr-2 btn-outline-primary bg-clears" href="">
                        Mailings
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;