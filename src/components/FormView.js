import React from 'react'
import GradeList from './GradeList';


const  FormView=props=> {
    const {onSubmit,onChange,grades,deleteGrade,editGrade,shouldEdit,closeEdit,selectedGrade,onEditSubmit}=props;
    return (
      <div className="card my-5">
      <div className="card-body">
{shouldEdit?(
<div>

<h5 className="card-title text-mute">Edit Grade <button className='btn btn-danger right-align pull-right' onClick={closeEdit}>x</button> </h5> 
{selectedGrade.name}
<form onSubmit={(event)=>onEditSubmit(event,selectedGrade)}>
      <div className="row">
        <div className="col">
        <input className='form-control' name='subject' onChange={onChange} type='text' placeholder='Enter Subject' defaultValue={selectedGrade.subject}/>
        </div>
        <div className="col">
        <input name='score' className='form-control' type='number' onChange={onChange}  placeholder='Enter Score' defaultValue={selectedGrade.score}/>
        </div>


    <div className="col">
    <input type='submit' className='btn btn-info' value='Edit'/>
    </div>
        </div>
    </form>

</div>
):(
  <div>
  <h5 className="card-title text-mute">Add a new student grade</h5>
  <form onSubmit={onSubmit}>
  <div className="row">
    <div className="col">
    <input className='form-control' name='subject' onChange={onChange} type='text' placeholder='Enter Subject'/>
    </div>
    <div className="col">
    <input name='score' className='form-control' type='number' onChange={onChange}  placeholder='Enter Score'/>
    </div>
    <div className="col">
    <input type='submit' className='btn btn-primary' value='Add'/>
    </div>
    </div>
</form>
</div>
)}
</div>
            <GradeList grades={grades} deleteGrade={deleteGrade} editGrade={editGrade} shouldEdit={shouldEdit}/>
            </div>
    )
}

export default FormView
