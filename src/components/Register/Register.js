import './Register.scss';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(data => {
            console.log(">>>check data axios", data);
        })
    });

    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Great Expectations7760
                        </div>
                        <div className='detail'>
                            Learning Fullstack Engineer
                        </div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className='brand d-sm-none'>
                            Great Expectations7760
                        </div>
                        <div className='form-group'>
                            <label>Email :</label>
                            <input className="form-control" type="text" placeholder='Email address' />
                        </div>
                        <div className='form-group'>
                            <label>Phone number :</label>
                            <input className="form-control" type="text" placeholder='Phone number' />
                        </div>
                        <div className='form-group'>
                            <label>Username :</label>
                            <input className="form-control" type="text" placeholder='Username' />
                        </div>
                        <div className='form-group'>
                        <label>Password :</label>
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
                        <label>Re-enter Password :</label>
                            <input className="form-control" type="password" placeholder="Re-enter Password" />
                        <button className='btn btn-primary'>Register</button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={()=>handleLogin()}>
                                Already've an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;