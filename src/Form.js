import React from 'react';


const Form=()=>{

    return (
        <form >
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Enter Subject'/>
            </div>
            <div className='form-group'>
                <input type='form-control' type='number' placeholder='Enter Score'/>
            </div>

            <input type='submit' value='Add'/>
        </form>
    )

}

export default Form;