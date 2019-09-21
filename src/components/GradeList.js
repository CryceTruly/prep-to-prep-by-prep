import React from 'react'

export default function gradeList (props){
    let total=0
        for(let i=0;i<=props.grades.length;i++){
            if(props.grades[i]!==undefined){
               total+= parseInt(props.grades[i].score);
            }
         }
        return (
            <div className='container'>
                <h4 className='text-muted'>All grades</h4>
                {props.grades.length>0?(
                    <table className='table table-stripped'>
                    <thead>
                        <tr><th>Subject</th><th>Score</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.grades.map(grade=>(
 <tr key={grade.id}><td>{grade.subject}</td><td>{grade.score}</td></tr>
                        ))}
                       <tr><td>Total</td><td>{total}</td></tr>
                    </tbody>
                </table>
                ):(<p>No Grades yet</p>)}
                
                
            </div>
        )
    }

