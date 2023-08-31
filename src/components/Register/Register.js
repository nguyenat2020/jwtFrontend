import './Register.scss';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { registerNewUser } from '../../services/userService';

const Register = () => {
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true
}
const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const handleRegister = async () => {
        let check = isValidInputs();
        let userData = { email, phone, username, password };
        if (check === true) {
            let response = await registerNewUser( email, phone, username, password );
            let serverData = response.data;
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
                history.push("/login");
            } else {
                toast.error(serverData.EM);
            }
        }
    }

    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput);
        if(!email) {
            toast.error("Email is required !");
            setObjCheckInput({...defaultValidInput, isValidEmail:false});
            return false;
        }

        let regx = /\S+@\S+\.\S+/;

        if(!regx.test(email)) {
            toast.error("Your email is invalid !");
            setObjCheckInput({...defaultValidInput, isValidEmail:false});
            return false;
        }

        if(!phone) {
            toast.error("Phone number is required !");
            setObjCheckInput({...defaultValidInput, isValidPhone:false});
            return false;
        }
        if(!password) {
            toast.error("Password is required !");
            setObjCheckInput({...defaultValidInput, isValidPassword:false});
            return false;
        }

        if(password !== confirmPassword) {
            toast.error("Your Password is not the same !");
            setObjCheckInput({...defaultValidInput, isValidConfirmPassword:false});
            return false;
        }
        return true;
    }

    useEffect(() => {
        // axios.get("https://localhost:8080/api/v1/test-api").then(data => {
        //     console.log(">>>check data axios", data);
        // })

        // axios.post('http://localhost:8080/api/v1/register', {
        //     email, phone, username, password
        //   })
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
                            <input type="text" placeholder='Email address' 
                                value={email} onChange={(event)=>setEmail(event.target.value)}
                                className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number :</label>
                            <input type="text" placeholder='Phone number' 
                            value={phone} onChange={(event)=>setPhone(event.target.value)}
                            className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username :</label>
                            <input type="text" placeholder='Username' 
                            value={username} onChange={(event)=>setUsername(event.target.value)}
                            className="form-control" 
                            />
                        </div>
                        <div className='form-group'>
                        <label>Password :</label>
                            <input type="password" placeholder="Password" 
                            value={password} onChange={(event)=>setPassword(event.target.value)}
                            className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            />
                        </div>
                        <label>Re-enter Password :</label>
                            <input type="password" placeholder="Re-enter Password" 
                            value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}
                            className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'}
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