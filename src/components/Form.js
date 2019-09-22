import React from 'react';
import FormView from './FormView';


class Form extends React.Component{

    state={
        grades:[]
    }

    subjectExists=subject=>{
        let exists=false
        this.state.grades.forEach(grade=>{
            if(subject===Object.values(grade)[0]){
                exists= true;
            }
        })
        return exists;
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const {subject,score}=this.state;
        const newGrade={subject,score,id:this.state.grades.length+1};
        if(subject!==''&& score>0 && score<=100 && !this.subjectExists(subject)){
                this.setState({'grades':[...this.state.grades,newGrade]})
               }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})   
    }


    render(){
        return (
              <FormView onChange={this.onChange} onSubmit={this.onSubmit} grades={this.state.grades}/>
        )
    }
}







export default Form;