import React from 'react'

class EditMaterialForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.quantityRef = React.createRef();
        this.finaleNumberRef = React.createRef();
    }

    changeMaterial = event => {
        event.preventDefault();
        const material = {
          name: this.nameRef.current.value,
          quantity: parseInt(this.quantityRef.current.value),
          finaleNumber: this.finaleNumberRef.current.value,
          // image: this.imageRef.current.value
        };
        this.props.editMaterial(material);
        // refresh the form
        event.currentTarget.reset();
      };
      

    render() { 
        return(
            <>
                <h5>Edit Material</h5>
                <form className="col-md-6" onSubmit={this.changeMaterial}>
                    <fieldset>
                        <label htmlFor="name">Material Name</label>
                        <input 
                            className="form-control"
                            name="name" 
                            ref={this.nameRef} 
                            type="text" 
                            defaultValue={this.props.material.name} 
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="finaleNumber">Finale #</label>
                        <input 
                            className="form-control"
                            name="finaleNumber" 
                            ref={this.finaleNumberRef} 
                            type="text" 
                            defaultValue={this.props.material.finaleNumber}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="quantity">Quantity in Stock</label>
                        <input 
                            className="form-control"
                            name="quantity" 
                            ref={this.quantityRef} 
                            type="number" 
                            defaultValue={this.props.material.quantity}
                        />
                    </fieldset>
                    <fieldset className="pt-3">
                        <button className="btn btn-success" type="submit">+ Update Material</button>   
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EditMaterialForm;