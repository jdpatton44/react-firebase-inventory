import React from 'react'

class AddMaterialForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.quantityRef = React.createRef();
        this.finaleNumberRef = React.createRef();
    }

    createMaterial = event => {
        event.preventDefault();
        const material = {
          name: this.nameRef.current.value,
          quantity: parseInt(this.quantityRef.current.value),
          finaleNumber: this.finaleNumberRef.current.value,
          // image: this.imageRef.current.value
        };
        this.props.addMaterial(material);
        // refresh the form
        event.currentTarget.reset();
    };
    
    editMaterial = event => {
        event.preventDefault();
        const material = {
          name: this.nameRef.current.value,
          quantity: parseInt(this.quantityRef.current.value),
          finaleNumber: this.finaleNumberRef.current.value,
          // image: this.imageRef.current.value
        };
        this.props.updateMaterial(material);
        // refresh the form
        event.currentTarget.reset();
    };

    handleCancelClick = event => {
        event.preventDefault();
        this.props.stopEditing()
    }

    render() { 
        const editingMaterialFlag = this.props.editingMaterialFlag;
        const materialToUpdate = editingMaterialFlag ? this.props.materials.filter(m => m.finaleNumber === editingMaterialFlag)[0] : '';
        return(
            <>
                <h5>{editingMaterialFlag ? `update Material #${materialToUpdate.finaleNumber}` : 'Create a New Material'}</h5>
                <form className="col-md-8" onSubmit={this.props.editingMaterialFlag ? this.editMaterial : this.createMaterial}>
                    <fieldset>
                        <label htmlFor="name">Material Name</label>
                        <input 
                            className="form-control"
                            name="name" 
                            ref={this.nameRef} 
                            type="text" 
                            placeholder="Name" 
                            defaultValue={editingMaterialFlag ? `${materialToUpdate.name}` : ''}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="finaleNumber">Finale #</label>
                        <input 
                            className="form-control"
                            name="finaleNumber" 
                            ref={this.finaleNumberRef} 
                            type="text" 
                            placeholder="Finale #" 
                            disabled={editingMaterialFlag}
                            defaultValue={editingMaterialFlag ? `${materialToUpdate.finaleNumber}` : ''}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="quantity">Quantity in Stock</label>
                        <input 
                            className="form-control"
                            name="quantity" 
                            ref={this.quantityRef} 
                            type="number" 
                            placeholder="Quantity" 
                            defaultValue={editingMaterialFlag ? `${materialToUpdate.quantity}` : ''}
                        />
                        <div class="btn-group mt-4 mb-4">
                            <button className="btn btn-success" type="submit">{editingMaterialFlag ? `update #${materialToUpdate.finaleNumber}` : '+ Add Material'}</button>
                            {editingMaterialFlag ? <button className="ml-4 btn btn-danger" onClick={this.handleCancelClick}>Cancel Edit</button> : ''}   
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddMaterialForm;