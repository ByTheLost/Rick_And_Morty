import style from './Form.module.css'
import validation from '../Validation/validation.js'
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function InitialPage({ login }) {

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (event) => { // Recibo cada caracter de los input
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.body}>
      <div className={style.half}>
        <div className={style.form}>
          <div className={style.wraper}>
            <span className={style.icon_close}><img className={style.img} src={require('../../img/cerrar.png')} alt='Icono cerrar'/></span>

            <div className={`${style.form_box} ${style.login}`}>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className={style.input_box}>
                  <span className={style.icon}><img className={style.img} src={require('../../img/email.png')} alt='Icono de email'/></span>
                  <input name="email" type="text" value={userData.email} onChange={handleOnChange} required/>
                  <label>Email</label>
                  {errors.email && <p className={style.p}>{errors.email}</p>}
                </div>
                <div className={style.input_box}>
                  <span className={style.icon}><img className={style.img} src={require('../../img/lock.png')} alt='Icono de passowrd'/></span>
                  <input name="password" type="password" value={userData.password} onChange={handleOnChange} required/>
                  <label>Password</label>
                  {errors.password && <p className={style.p}>{errors.password}</p>}
                </div>
                <div className={style.remember_forgot}>
                  <label><input type='checkbox'></input> Remember me</label>
                  <NavLink to="#">Forgot Password?</NavLink>
                </div>
                <button type='submit' className={style.btn}>Login</button>
                <div className={style.login_register}>
                  <p>Don't have an account? <NavLink to="#" className={style.register_link}>Register</NavLink></p>
                </div>
              </form>
            </div>

            {/* <div className={`${style.form_box} ${style.register}`}>
              <h2>Register</h2>
              <form action="#">
                <div className={style.input_box}>
                  <span class={style.icon}><img className={style.img} src={require('../../img/usuario.png')}/></span>
                  <input type="text" required/>
                  <label>Username</label>
                </div>
                <div className={style.input_box}>
                  <span class={style.icon}><img className={style.img} src={require('../../img/email.png')}/></span>
                  <input type="email" required/>
                  <label>Email</label>
                </div>
                <div className={style.input_box}>
                  <span class={style.icon}><img className={style.img} src={require('../../img/lock.png')}/></span>
                  <input type="password" required/>
                  <label>Password</label>
                </div>
                <div className={style.remember_forgot}>
                  <label><input type='checkbox'></input> I agree to the terms & conditions</label>
                </div>
                <button type='submit' className={style.btn}>Register</button>
                <div className={style.login_register}>
                  <p>Already have an account?<a href="#" className={style.login_link}> Login</a></p>
                </div>
              </form>
            </div> */}

          </div> 
        </div>
      </div>
    </div>
  )
}

export default InitialPage;