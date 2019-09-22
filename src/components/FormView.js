import React from 'react'
import GradeList from './GradeList';


const  FormView=props=> {
    const {onSubmit,onChange,grades}=props;
    return (
      <div className="card my-5">
      <div className="card-body">
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
            <GradeList grades={grades}/>
            </div>
    )
}

export default FormView
