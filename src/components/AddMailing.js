import React from 'react'

class AddMailingForm extends React.Component {
    constructor(props) {
        super(props);
        this.dateRef = React.createRef();
        this.segmentRef = React.createRef();
        this.quantityRef = React.createRef();
    }

    createMailing = event => {
        event.preventDefault();
        const mailing = {
          segment: this.segmentRef.current.value,
          quantity: this.quantityRef.current.value,
          date: this.dateRef.current.value,
        };
        this.props.addMailing(mailing);
        // refresh the form
        event.currentTarget.reset();
      };

    render() { 
        return(
            <form className="col-md-6" onSubmit={this.createMailing}>
                <fieldset>
                    <label htmlFor="name">Mail Date</label>
                    <input 
                        className="form-control"
                        name="date" 
                        ref={this.dateRef} 
                        type="date" 
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="segment">Package</label>
                    <select 
                        name="segment" 
                        id="segment" 
                        className="form-control"
                        ref={this.segmentRef} 
                        
                    >
                            {this.props.segments.map(s => 
                                <option value={s.name} >{s.name}</option>
                            )}
                    </ select>
                </fieldset>
                <fieldset>
                    <label htmlFor="quantity">Quantity in Mailing</label>
                    <input 
                        className="form-control"
                        name="quantity" 
                        ref={this.quantityRef} 
                        type="number" 
                        placeholder="Quantity" 
                    />
                </fieldset>
                <fieldset className="pt-3">
                    <button className="btn btn-success" type="submit">+ Add Mailing</button>   
                </fieldset>
            </form>
        )
    }
}

export default AddMailingForm;