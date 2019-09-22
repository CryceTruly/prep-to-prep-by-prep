import React from 'react';
import FormView from './FormView';


class Form extends React.Component{

    state={
        grades:[],
        selectedGrade:{},
        shouldEdit:false
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
                this.setState({grades:[...this.state.grades,newGrade]})
               }
    }
  
    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        
        
    }
    deleteGrade=id=>{
           this.state.grades.forEach((grade,index,arr)=>{
               if(grade.id===id){
                const newArray=[...this.state.grades];
                newArray.splice(index,1);
                this.setState({grades:newArray});
    }
}
)
}

closeEdit=()=>{
    this.setState({shouldEdit:false,selectedGrade:{}})
};

editGrade=grade=>{
this.setState({selectedGrade:grade,shouldEdit:true});
};

onEditSubmit=(event,item)=>{
    event.preventDefault();
    const {subject,score}=this.state;
    const updatedGrade={subject,score,id:item.id};
    if(subject!==''&& score>0 && score<=100){
        const grades=this.state.grades.map(grade=>grade.id===item.id?updatedGrade:grade)
        this.setState({
            grades:grades,shouldEdit:false,selectedGrade:{}})

           }
}

    render(){
        return (
              <FormView onChange={this.onChange} onSubmit={this.onSubmit} grades={this.state.grades} deleteGrade={this.deleteGrade} editGrade={this.editGrade} shouldEdit={this.state.shouldEdit} closeEdit={this.closeEdit} onEditSubmit={this.onEditSubmit} selectedGrade={this.state.selectedGrade}/>
        )
    }
}

export default Form;
