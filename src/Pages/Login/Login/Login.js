import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {

    const [err, setErr]=useState('');
    let errorElement;

    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register');
    }

    const location =useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>;
      }
  
      if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
      }

      if (user) {
        navigate(from, { replace: true });
      }


    const handleLogin = (event) => {
        event.preventDefault();
        const email=event.target.email.value;
        const password = event.target.password.value;
       
  
        if(password.length<6){
          setErr('Password should be at least 6 characters long.');
          return;
        }
  
        signInWithEmailAndPassword(email, password);
       
  
      }

    return (
        <div className='container w-50 mx-auto border rounded mt-3'>
         <h2 className='text-center pt-2 text-color'>Please Login</h2>   
        <Form onSubmit={handleLogin}>
            
            <Form.Control type="email" name="email" placeholder="Enter email" required className='mb-3'/>
           
            <Form.Control type="password" name="password" placeholder="Password" required className='mb-3'/>
          
            <Button className='bg-color' type="submit">
            Login
            </Button>
            
        </Form>
        <p className='text-danger mt-1'>{err} {errorElement}</p>
        <p className='mt-2'>New to Click By Me? <Link to="/register" className='text-decoration-none fw-bold text-color' onClick={navigateRegister}>Please Register</Link></p>
    </div>
    );
};

export default Login;