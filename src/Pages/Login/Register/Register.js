import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {

  const [error, setError]=useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/login');
    }

    const handleRegister = (event) => {
      event.preventDefault();
      const email=event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;

      if(password.length<6){
        setError('Password should be at least 6 characters long.');
        return;
      }

      if(password !== confirmPassword){
        setError('Password does not match.');
        console.log(password,confirmPassword);
        return;
      }

      createUserWithEmailAndPassword(email,password);


    }


    return (
      <div className='container w-50 mx-auto border rounded mt-3'>
      <h2 className='text-center pt-2 text-color'>Please Register</h2>   
        <Form onSubmit={handleRegister}>
          
            <Form.Control type="email" name="email" placeholder="Enter email" required className='mb-3'/>
            
            <Form.Control type="password" name="password" placeholder="Password" className='mb-3'/>
            
            
            <Form.Control type="password" name="confirmPassword"  placeholder="Confirm Password" className='mb-3'/>
            
            <Button className='bg-color' type="submit">
            Register
            </Button>
        </Form>    
     <p className='text-danger mt-1'>{error}</p>
     <p className='mt-2'>Already have an account? <Link to="/login" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Login</Link></p>
 </div>
    );
};

export default Register;