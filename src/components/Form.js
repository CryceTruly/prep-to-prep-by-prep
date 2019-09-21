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



        this.setState({'grades':[...this.state.grades,newGrade]})

    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})   
    }


    render(){

        return (
            <div>
            <form onSubmit={this.onSubmit} >
                <div className='form-group'>
                    <input className='form-control' name='subject' onChange={this.onChange} type='text' placeholder='Enter Subject'/>
                </div>
                <div className='form-group'>
                    <input type='form-control' name='score' type='number' onChange={this.onChange}  placeholder='Enter Score'/>
                </div>
    
                <input type='submit' value='Add'/>
            </form>
             <br/>
            <hr/>

            <GradeList grades={this.state.grades}/>



            </div>
        )
    
    }


   

}



export default Form;