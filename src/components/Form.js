import React from 'react';
import GradeList from './GradeList';


class Form extends React.Component{

    state={
        grades:[]
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const {subject,score}=this.state;
        const newGrade={subject,score,id:this.state.grades.length+1};

        if(subject!=='' && score<=100){

                this.setState({'grades':[...this.state.grades,newGrade]})
     
               }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})   
    }


    render(){

        return (






      <div className="card my-5">
      <div className="card-body">
        <h5 className="card-title text-mute">Add a new student grade</h5>


        <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col">
          <input className='form-control' name='subject' onChange={this.onChange} type='text' placeholder='Enter Subject'/>
                  
          </div>
          <div className="col">
          <input name='score' className='form-control' type='number' onChange={this.onChange}  placeholder='Enter Score'/>
             
          </div>


          <div className="col">
          <input type='submit' className='btn btn-primary' value='Add'/>
          
          </div>

          </div>
      </form>
             </div>

            <GradeList grades={this.state.grades}/>



            </div>
        )
    }
}



export default Form;