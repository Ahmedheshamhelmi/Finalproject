import React, { useEffect, useState } from 'react';
import './login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../utilities/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { login } from '../../store/slices/authSlice';


export default function LogIn() {

  const [activeTab, setActiveTab] = useState('tab-1');
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [loginState , setLoginState] = useState('')


  let isAuth = useSelector((state) => state.auth.isAuth)
  useEffect(() => {
    if(!isAuth) {
      setActiveTab('tab-1') 
    }
  }, [isAuth]);
  
  const [registerData, setRegisterData] = useState({
    userName : '',
    password : '',
    passwordRepeat : '',
    email : ''
  });
  
  // Registration Section Start
  const url = 'http://localhost:3005/users';

  const handleAddUser = (data) => {
    axios.post(url, data)
      .then(response => {
        console.log(response.data);
        setIsRegistered(true);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    if (registerData.userName != '' && registerData.password != '' &&  registerData.password == registerData.passwordRepeat && registerData.email != ''){
      delete registerData.passwordRepeat;
      handleAddUser(registerData);
      setTimeout(() => {
        navigate(0)
      }, 2000)
      ;
    }
  };

  const changeHandler = (e) => {
    setRegisterData({...registerData, [e.target.name] : e.target.value})
  };
  // Registration Section End

  // Login Section Start
  const [users , setUsers] = useState([])
  const [loginData, setLoginData] = useState({
    userName : '',
    password : '',
    passwordRepeat : '',
    email : ''
  });
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      });

  }, [])

  const handleLogin = () => {
    let obj = users.find(u => 
      u.userName === loginData.userName && 
      u.password === loginData.password
    );
    if(obj){
      console.log(`Login success`);
      setLoginState('success')
      dispatch(login(obj.id))
      setTimeout(() => {
        navigate('/')
      }, 500);
    }else{
      setLoginState('failed')
    }
  }
  const submitHandlerLogin = (e) => {
    e.preventDefault()
    handleLogin(loginData);
    };

  const changeHandlerLogin = (e) => {
    setLoginData({...loginData, [e.target.name] : e.target.value})
  };
  // Login Section End 
  return (
    <>
      <Header/>
      <section className='login-section'>
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="login-wrap col-12 col-md-6">
              <div className="login-html">
                <input checked={activeTab === 'tab-1'} onChange={() => setActiveTab('tab-1')} id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab" >Sign In</label>
                <input checked={activeTab === 'tab-2'} onChange={() => setActiveTab('tab-2')} id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                  <form onSubmit={submitHandlerLogin} className="sign-in-htm pt-4">
                    <div className="group">
                      <label htmlFor="user" className="label text-white mb-2">Username</label>
                      <input onChange={changeHandlerLogin} value={loginData.userName} id="user" type="text" name='userName' className="input"/>
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label text-white mb-2">password</label>
                      <input onChange={changeHandlerLogin} value={loginData.password} id="pass" type="text" name='password' className="input pass"/>
                    </div>
                    {/* <div className="group">
                      <input id="check" type="checkbox" className="check" checked/>
                      <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                    </div> */}
                    <div className="group mb-0">
                      <input type="submit" className="button" value="Sign In"/>
                    </div>
                    <div className="group mb-0 mt-3">
                      {loginState == 'failed' ?
                        <div className={`btn btn-danger mt-2 w-100 text-center signup`}>
                        Check Username & Password
                      </div>: null
                      }
                    </div>
                  </form>
                  <form onSubmit={submitHandler} className="sign-up-htm pt-4">
                    <div className="group">
                      <label htmlFor="user2" className="label text-light mb-2">Username</label>
                      <input onChange={changeHandler} value={registerData.userName} id="user2" type="text" name='userName' className="input"/>
                    </div>
                    <div className="group">
                      <label htmlFor="pass2" className="label text-light mb-2">password</label>
                      <input onChange={changeHandler} value={registerData.password} id="pass2" type="text" name='password' className="input pass" />
                    </div>
                    <div className="group">
                      <label htmlFor="passRepeat" className="label text-light mb-2">Repeat password</label>
                      <input onChange={changeHandler} value={registerData.passRepeat} id="passRepeat" name='passwordRepeat' type="text" className="input pass"/>
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="label text-light mb-2">Email Address</label>
                      <input onChange={changeHandler} value={registerData.email}  id="email" name='email' type="text" className="input"/>
                    </div>
                    <div className="group mb-0">
                      <input type='submit' className="button signup" value="Sign Up"/>
                    </div>
                    <div className="group mb-0">
                      <div className={isRegistered ? `btn btn-success mt-2 w-100 text-center signup`: `d-none`}>
                        Register Success
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
