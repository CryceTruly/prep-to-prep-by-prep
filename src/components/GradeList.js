import React from 'react'
import GradeItem from './GradeItem';

const GradeList= props=>{
    let total=0
    const {grades}=props;
        for(let i=0;i<=grades.length;i++){
            if(grades[i]!==undefined){
               total+= parseInt(grades[i].score);
            }
         }
        return (
            <div className='container'>
                <h4 className='text-muted'>All grades</h4>
                {grades.length>0?(
                    <table className='table table-stripped'>
                    <thead>
                        <tr><th>Subject</th><th>Score</th>
                        </tr>
                    </thead>

                    <tbody>
                        {grades.map(grade=>(
                            <GradeItem grade={grade} key={grade.id}/>
                        ))}
                       <tr><td>Total</td><td className='lead text-dark'>{total}</td></tr>
                    </tbody>
                </table>
                ):(<p>No Grades yet</p>)}
                
                
            </div>
        )
    }

    export default GradeList;
