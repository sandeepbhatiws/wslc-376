import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginRegister() {

    var navigate = useNavigate();
    const [registerButton, setRegisterButton] = useState('Register');
    const [loginButton, setLoginButton] = useState('Login');

    useEffect(() => {
        var userId = localStorage.getItem('uid');
        if(userId){
            navigate('/');
        }
    },[]);

    const login = (event) => {
        event.preventDefault();
        setLoginButton('Loading....');

        const auth = getAuth();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            localStorage.setItem('uid',user.uid);
            toast.success('User login succussfully !')
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoginButton('Login');
        });
    }

    const register = (event) => {
        event.preventDefault();
        setRegisterButton('Loading....');

        const auth = getAuth();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user);
            localStorage.setItem('uid',user.uid);
            toast.success('User register succussfully !')
            navigate('/');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setRegisterButton('Register');
            // ..
        });
    }


    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>User Login</h2>
                            <form onSubmit={ login }>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name='password' class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" class="btn btn-primary">{loginButton}</button>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <h2>User Register</h2>
                            <form onSubmit={ register }>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name='password' class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" class="btn btn-primary">{registerButton}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
