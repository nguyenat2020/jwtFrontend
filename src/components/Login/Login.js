import { useState } from 'react';
import './Login.scss';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginUser } from "../../services/userService";

const Login = () => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }

    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleCreateNewAccount = () => {
        history.push("/register");
    }

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if(!valueLogin) {
            setObjValidInput({...objValidInput, isValidValueLogin: false});
            toast.error("Please enter your email address or phone number");
            return;
        }
        if(!password) {
            setObjValidInput({...objValidInput, isValidPassword: false});
            toast.error("Please enter your password");
            return;
        }

        await loginUser(valueLogin, password);
    }

    return (
        <div className="login-container">
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
                        <input className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control' }
                            type="text" placeholder='Email address or your phone number'
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />
                        <input className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control' }
                            type="password" placeholder="Password" 
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}                        
                        />
                        <button className='btn btn-primary'
                            onClick={()=>handleLogin()}
                        >Login</button>
                        <span className='text-center'>
                            <a href='#' className='forgot-pw'>Forgot your password?</a></span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;