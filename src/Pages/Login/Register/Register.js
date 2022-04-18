import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {


  const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/login');
    }


    return (
      <div className='container w-50 mx-auto border rounded mt-3'>
      <h2 className='text-center pt-2 text-color'>Please Register</h2>   
     <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         
         <Form.Control type="email" name="email" placeholder="Enter email" required/>
        
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
        
         <Form.Control type="password" name="password" placeholder="Password" required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
        
         <Form.Control type="password" name="confirm-password"  placeholder="Confirm Password" required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         {/* <Form.Check type="checkbox" label="Check me out" /> */}
         </Form.Group>
         <Button className='bg-color' type="submit">
         Register
         </Button>
     </Form>
     <p className='mt-2'>Already have an account? <Link to="/login" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Login</Link></p>
 </div>
    );
};

export default Register;