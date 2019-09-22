import React from 'react'

const GradeItem =props=> {
    const {grade,deleteGrade,editGrade}=props;
    return (
      <tr key={grade.id}><td>{grade.subject}</td><td>{grade.score}</td>
      <td><button classame='btn btn-sm' onClick={()=>editGrade(grade)}>Edit</button>
        </td><td className='text-danger btn btn-outline' onClick={()=>deleteGrade(grade.id)}>X</td></tr>   
    )
}

export default GradeItem


//TODO
//AFTER DELETE CHECK DELETED @SELECTED