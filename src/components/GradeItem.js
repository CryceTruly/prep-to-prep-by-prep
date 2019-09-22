import React from 'react'

const GradeItem =props=> {
    const {grade}=props;
    return (
 <tr key={grade.id}><td>{grade.subject}</td><td>{grade.score}</td></tr>   
    )
}

export default GradeItem
