"use client";
import React, { useEffect, useState } from 'react'
import "./login-register.css"
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function page() {

    const router = useRouter();
    const [formSubmit , setFormSubmit] = useState(false);

    const registerUser = (event) => {
        event.preventDefault();
        setFormSubmit(true);

        axios.post('http://localhost:8000/api/website/users/register', event.target)
        .then((result) => {
            if(result.data._status == true){
                toast.success(result.data._message);
                setFormSubmit(true);
                Cookies.set('token',result.data._token);
                Cookies.set('user',JSON.stringify(result.data._data));
                console.log(result.data);
                router.push('/my-dashboard');
            } else {
                toast.error(result.data._message);
                setFormSubmit(false);
            }
        })
        .catch(() => {
            toast.error('Something Went Wrong');
            setFormSubmit(false);
        })
    }

  return (
    <div>
    
    <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <h3>My account</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li> {">"}</li>
                            <li>My account</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>

    <div className="customer_login">
        <div className="container">
            <div className="row">
               
                <div className="col-lg-6 col-md-6">
                    <div className="account_form">
                        <h2>login</h2>
                        <form action="#">
                            <p>   
                                <label>Username or email <span>*</span></label>
                                <input type="text"/>
                             </p>
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                             </p>   
                            <div className="login_submit">
                               <a href="#">Lost your password?</a>
                                <label htmlFor="remember">
                                    <input id="remember" type="checkbox"/>
                                    Remember me
                                </label>
                                <button type="submit">login</button>
                                
                            </div>

                        </form>
                     </div>    
                </div>
                
                <div className="col-lg-6 col-md-6">
                    <div className="account_form register">
                        <h2>Register</h2>
                        <form onSubmit={ registerUser } autoComplete='off'>
                            <p>   
                                <label>Name <span>*</span></label>
                                <input type="text" name='name'/>
                             </p>
                             <p>   
                                <label>Mobile Number  <span>*</span></label>
                                <input type="text" name='mobile_number'/>
                             </p>
                            <p>   
                                <label>Email address  <span>*</span></label>
                                <input type="text" name='email'/>
                             </p>
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password" name='password'/>
                             </p>
                            <div className="login_submit">
                                <button type="submit" disabled={ formSubmit ? 'disabled' : '' }>
                                    {
                                        formSubmit ? 'Loading....' : 'Register' 
                                    }
                                </button>
                            </div>
                        </form>
                    </div>    
                </div>
                
            </div>
        </div>    
    </div>
    
    </div>
  )
}
