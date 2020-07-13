import React from 'react';

export default function AddPackageForm ({materials, addSegment}) {
    const nameRef = React.useRef('');
    const materialsListRef = React.useRef([]);
    const idRef = React.useRef(null);

    const createSegment = event => {
        event.preventDefault();
        const segment = {
          name: nameRef.current.value,
          materialList: Array.from(event.target.elements).filter(e => e.type === 'checkbox' && e.checked).map(e => e.value),
          id: idRef.current.value,
        };

        console.log(segment)
        addSegment(segment);
        // segment.materialList.push(this.materialListRef.current.value)
        // this.props.addSegment(segment);
        // refresh the form
        event.currentTarget.reset();
      };

    return (
        <>
            <h5>Create a New Package</h5>
            <form className="col-md-8" id="addPackageForm" onSubmit={createSegment}>
                <fieldset>
                    <input type="hidden" value={`segment${Date.now()}`} ref={idRef} />
                    <label htmlFor="name">Package Name</label>
                    <input 
                        required
                        className="form-control"
                        name="name" 
                        ref={nameRef} 
                        type="text" 
                        placeholder="Name" 
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="materialList">Materials</label>
                    {Object.keys(materials).map((key) => (
                        <fieldset key={key}>
                            <input 
                                className="mx-1"
                                name='finaleNumber'  
                                type="checkbox" 
                                value={materials[key].finaleNumber} 
                                id={materials[key].finaleNumber} 
                                ref={materialsListRef[key]} 
                            /> 
                            <label htmlFor={`${materials[key].finaleNumber}`} >  {materials[key].finaleNumber} - {materials[key].name} </ label>
                        </fieldset>
                    ))}
                    <div className="btn-group mt-4 mb-4">
                        <button className="btn btn-success" type="submit">+ Add Package</button>   
                        <button className="ml-4 btn btn-danger" onClick={() => document.getElementById('addPackageForm').reset()}>Cancel</button>  
                    </div>
                </fieldset>
            </form>
        </>
    )
}