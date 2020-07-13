import React from 'react'

export default function EditPackageForm ({materials, updateSegment, segments, stopEditing,  editingSegmentFlag}) {
    const nameRef = React.useRef();
    const materialsListRef = React.useRef();
    const idRef = React.useRef();

    const segmentToUpdate = segments.filter(s => s.id === editingSegmentFlag)[0];

    const editSegment = event => {
        event.preventDefault();
        const segment = {
          name: nameRef.current.value,
          materialList:  Array.from(event.target.elements).filter(e => e.type === 'checkbox' && e.checked).map(e => e.value),
          id: idRef.current.value,
          // image: imageRef.current.value
        };
        updateSegment(segment);
        // refresh the form
        event.currentTarget.reset();
      }

    const handleCancelClick = event => {
        event.preventDefault();
        stopEditing()
    }
    
    return (
        <>
                <h5>{`Update Package ${segmentToUpdate.name}`}</h5>
                <form className="col-md-8" onSubmit={editSegment}>
                    <fieldset>
                        <input type="hidden" value={segmentToUpdate.id} ref={idRef} />
                        <label htmlFor="name">Package Name</label>
                        <input 
                            required
                            className="form-control"
                            name="name" 
                            ref={nameRef} 
                            type="text" 
                            placeholder="Name" 
                            defaultValue={segmentToUpdate.name}
                            
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="materialList">Materials</label>
                        {Object.keys(materials).map((key) => (
                            <fieldset key={key}>
                                <input 
                                    className="mx-1"
                                    name={materials[key].finaleNumber}  
                                    type="checkbox" 
                                    value={materials[key].finaleNumber} 
                                    id={materials[key].finaleNumber} 
                                    ref={materialsListRef[key]} 
                                    checked={segmentToUpdate.materialList.includes(materials[key].finaleNumber)}
                                /> 
                                <label htmlFor={`${materials[key].finaleNumber}`} >  {materials[key].finaleNumber} - {materials[key].name} </ label>
                            </fieldset>
                        ))}
                        <div className="btn-group mt-4 mb-4">
                            <button className="btn btn-success" type="submit">Edit Package</button>   
                            <button className="ml-4 btn btn-danger" onClick={handleCancelClick}>Cancel Edit</button>
                        </div>
                    </fieldset>
                </form>
            </>
    )
}