import React from 'react'

class AddSegmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.materialsListRef = React.createRef([]);
      }
    
      

    createSegment = event => {
        event.preventDefault();
        const segment = {
          name: this.nameRef.current.value,
          materialList: Array.from(event.target.elements).filter(e => e.type === 'checkbox' && e.checked).map(e => e.value)
        };
        this.props.addSegment(segment);
        // segment.materialList.push(this.materialListRef.current.value)
        // this.props.addSegment(segment);
        // refresh the form
        event.currentTarget.reset();
      };
    
    render() {
        return (
            <>
                <h3>Add a Package</h3>
                <form className="col-md-6" onSubmit={this.createSegment}>
                    <fieldset>
                        <label htmlFor="name">Segment Name</label>
                        <input 
                            className="form-control"
                            name="name" 
                            ref={this.nameRef} 
                            type="text" 
                            placeholder="Name" 
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="materialList">Materials</label>
                        {Object.keys(this.props.materials).map((key) => (
                            <fieldset key={key}>
                                <input 
                                    name={this.props.materials[key].finaleNumber}  
                                    type="checkbox" 
                                    value={this.props.materials[key].finaleNumber} 
                                    ref={this.materialsListRef[key]} 
                                /> 
                                <label htmlFor={`${this.props.materials[key].finaleNumber}`} >  {this.props.materials[key].finaleNumber} - {this.props.materials[key].name} </ label>
                            </fieldset>
                        ))}
                    </fieldset>
                    <fieldset className="pt-3">
                        <button className="btn btn-success" type="submit">+ Add Package</button>   
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddSegmentForm;