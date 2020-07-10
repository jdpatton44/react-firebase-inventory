import React from 'react'


class AddSegmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.materialsListRef = React.createRef([]);
        this.idRef = React.createRef();
      }
    
      

    createSegment = event => {
        event.preventDefault();
        const segment = {
          name: this.nameRef.current.value,
          materialList: Array.from(event.target.elements).filter(e => e.type === 'checkbox' && e.checked).map(e => e.value),
          id: this.idRef.current.value,
        };
        this.props.addSegment(segment);
        // segment.materialList.push(this.materialListRef.current.value)
        // this.props.addSegment(segment);
        // refresh the form
        event.currentTarget.reset();
      };

      editSegment = event => {
        event.preventDefault();
        const segment = {
          name: this.nameRef.current.value,
          materialList:  Array.from(event.target.elements).filter(e => e.type === 'checkbox' && e.checked).map(e => e.value),
          id: this.idRef.current.value,
          // image: this.imageRef.current.value
        };
        this.props.updateSegment(segment);
        // refresh the form
        event.currentTarget.reset();
      }

      handleCancelClick = event => {
        event.preventDefault();
        this.props.stopEditing()
    }
    
    render() {
        const editingSegmentFlag = this.props.editingSegmentFlag;
        const segmentToUpdate = editingSegmentFlag ? this.props.segments.filter(s => s.id === editingSegmentFlag)[0] : '';
        this.nameRef = editingSegmentFlag ? segmentToUpdate.name : ''
        return (
            <>
                <h5>{editingSegmentFlag ? `Update Package ${segmentToUpdate.name}` : 'Create a New Package'}</h5>
                <form className="col-md-8" onSubmit={this.props.editingSegmentFlag ? this.editSegment : this.createSegment}>
                    <fieldset>
                        <input type="hidden" value={editingSegmentFlag ? segmentToUpdate.id : `segment${Date.now()}`} ref={this.idRef} />
                        <label htmlFor="name">Package Name</label>
                        <input 
                            className="form-control"
                            name="name" 
                            ref={this.nameRef} 
                            type="text" 
                            placeholder="Name" 
                            defaultValue={editingSegmentFlag ? segmentToUpdate.name : ''}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="materialList">Materials</label>
                        {Object.keys(this.props.materials).map((key) => (
                            <fieldset key={key}>
                                <input 
                                    className="mx-1"
                                    name={this.props.materials[key].finaleNumber}  
                                    type="checkbox" 
                                    value={this.props.materials[key].finaleNumber} 
                                    id={this.props.materials[key].finaleNumber} 
                                    ref={this.materialsListRef[key]} 
                                    checked={editingSegmentFlag ? segmentToUpdate.materialList.includes(this.props.materials[key].finaleNumber): false}
                                /> 
                                <label htmlFor={`${this.props.materials[key].finaleNumber}`} >  {this.props.materials[key].finaleNumber} - {this.props.materials[key].name} </ label>
                            </fieldset>
                        ))}
                        <div className="btn-group mt-4 mb-4">
                            <button className="btn btn-success" type="submit">+ Add Package</button>   
                            {editingSegmentFlag ? <button className="ml-4 btn btn-danger" onClick={this.handleCancelClick}>Cancel Edit</button> : ''}  
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddSegmentForm;