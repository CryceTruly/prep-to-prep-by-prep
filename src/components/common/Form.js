import React from 'react'

const Form=props=> {
    const {onSubmit,onChange,btnCls,btnText,cardTitle,closeEdit,selectedGrade,onEditSubmit}=props;
   
    return (
        <div>
        <h5 className="card-title text-mute">{cardTitle} {selectedGrade.id?(<button className={'btn btn-sm btn-warning'} onClick={closeEdit}>x</button>):(null)} </h5> 
        <form onSubmit={!selectedGrade.id?onSubmit:((event)=>{onEditSubmit(event,selectedGrade)})}>
              <div className="row">
                <div className="col">
                <input className='form-control' name='subject' onChange={onChange} type='text' placeholder='Enter Subject' defaultValue={selectedGrade.subject}/>
                </div>
                <div className="col">
                <input name='score' className='form-control' type='number' onChange={onChange}  placeholder='Enter Score' defaultValue={selectedGrade.score}/>
                </div>
            <div className="col">
            <input type='submit' className={btnCls} value={btnText}/>
            </div>
                </div>
            </form>
        
        </div>
    )
}

export default Form
