import React, { useState } from 'react'


export default function ChangeQuantityForm({ materials, changeQuantityFlag, stopEditing, updateMaterialQuantity } ) {
    const quantityRef = React.useRef(null)
    const materialToUpdate = materials.filter(m => m.finaleNumber === changeQuantityFlag)[0]
    const [quantity, setQuantity] = useState(0);
    const handleChange = (e) => {
        setQuantity(quantityRef.current.value)
    }
    const updateQuantity = (e)=> {
        e.preventDefault();
        console.log(e)
        // pass to update material as a negative to add material.
        updateMaterialQuantity(changeQuantityFlag, -quantity);
    }

    return(
        <div>
            <h5>Upadate Quantity</h5>
            <form className="col-md-8" onSubmit={updateQuantity} >
                <label htmlFor="quantity">Add new stock of {parseInt(quantity)} to <strong>{materialToUpdate.name}</strong></label>
                <input 
                    type="text" 
                    onChange={() => handleChange()}
                    className="form-control"
                    ref={quantityRef}
                    
                />
                <div className="btn-group mt-4 mb-4">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                    Update Quantity to {parseInt(quantity) + materialToUpdate.quantity}  
                    </button>
                    <button className="ml-4 btn btn-danger" onClick={() => stopEditing()} >Cancel</button>
                </div>
            </form>
        </div>
    )
}