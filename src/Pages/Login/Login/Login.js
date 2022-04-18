import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import './Login.css';


const Login = () => {

    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto border rounded mt-3'>
         <h2 className='text-center pt-2 text-color'>Please Login</h2>   
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
            <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button className='bg-color' type="submit">
            Login
            </Button>
            
        </Form>
        <p className='mt-2'>New to Click By Me? <Link to="/register" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Register</Link></p>
    </div>
    );
};

export default Login;