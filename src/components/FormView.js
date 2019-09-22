import React from 'react'
import GradeList from './GradeList';
import Form from './common/Form';


const  FormView=props=> {
    const {onSubmit,onChange,grades,deleteGrade,editGrade,shouldEdit,closeEdit,selectedGrade,onEditSubmit}=props;
    return (
      <div className="card my-5">
      <div className="card-body">
{shouldEdit?(
<Form cardTitle={'Edit Grade'} closeEdit={closeEdit} selectedGrade={selectedGrade} onEditSubmit={onEditSubmit} onChange={onChange}  btnText={'Edit'}  btnCls={'btn btn-info'} />
):(
    <Form cardTitle={'Add a new student grade'} closeEdit={closeEdit} selectedGrade={selectedGrade} onSubmit={onSubmit} onChange={onChange} btnText={'Add'} btnCls={'btn btn-primary'}  />
)}
</div>
            <GradeList grades={grades} deleteGrade={deleteGrade} editGrade={editGrade} shouldEdit={shouldEdit}/>
            </div>
    )
}

export default FormView
