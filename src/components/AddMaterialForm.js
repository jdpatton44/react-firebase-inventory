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

    render() { 
        return(
            <>
                <h5>Create a New Material</h5>
                <form className="col-md-6" onSubmit={this.createMaterial}>
                    <fieldset>
                        <label htmlFor="name">Material Name</label>
                        <input 
                            className="form-control"
                            name="name" 
                            ref={this.nameRef} 
                            type="text" 
                            placeholder="Name" 
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
                        />
                    </fieldset>
                    <fieldset className="pt-3">
                        <button className="btn btn-success" type="submit">+ Add Material</button>   
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddMaterialForm;