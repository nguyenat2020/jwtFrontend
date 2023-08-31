import './Register.scss';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Register = () => {
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const handleRegister = () => {
        let userData = { email, phone, username, password };
        console.log(">>>check userData ", userData);
    }

    useEffect(() => {
        // axios.get("https://reqres.in/api/users?page=2").then(data => {
        //     console.log(">>>check data axios", data);
        // })
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
                            <input className="form-control" type="text" placeholder='Email address' 
                                value={email} onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number :</label>
                            <input className="form-control" type="text" placeholder='Phone number' 
                            value={phone} onChange={(event)=>setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username :</label>
                            <input className="form-control" type="text" placeholder='Username' 
                            value={username} onChange={(event)=>setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                        <label>Password :</label>
                            <input className="form-control" type="password" placeholder="Password" 
                            value={password} onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <label>Re-enter Password :</label>
                            <input className="form-control" type="password" placeholder="Re-enter Password" 
                            value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}
                            />
                        <button className='btn btn-primary'
                        onClick={() => handleRegister()}
                        >Register</button>
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