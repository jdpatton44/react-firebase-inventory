import React from 'react'


export default function ChangeQuantityForm({ materials, changeQuantityFlag, stopEditing } ) {
    const quantityRef = React.useRef()

    const updateQuantity = (e)=> {
        e.preventDefault();

    }

    const materialToUpdate = materials.filter(m => m.finaleNumber === changeQuantityFlag)[0]
    return(
        <div>
            <h5>Upadate Quantity</h5>
            <form className="col-md-8" onSubmit={updateQuantity} >
                <label htmlFor="quantity">Enter a new quantity for <strong>{materialToUpdate.name}</strong></label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder={ materialToUpdate.quantity } 
                    ref={quantityRef}
                />
                <div className="btn-group mt-4 mb-4">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                    Update Quantity   
                    </button>
                    <button className="ml-4 btn btn-danger" onClick={() => stopEditing()} >Cancel</button>
                </div>
            </form>
        </div>
    )
}