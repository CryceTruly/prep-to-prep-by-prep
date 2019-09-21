import React from 'react';
import ReactDOM from "react-dom";
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
return (<div className='container'>
   
    <Form/>
</div>
);
}


ReactDOM.render(<App/>,document.getElementById('root'))