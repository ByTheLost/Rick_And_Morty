import style from './InitialPage.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';

function InitialPage() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (event) => { // Recibo cada caracter de los input
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    validate();
  };
  
  const navigate = useNavigate()
  const handleOnSubmit = (event) => {
    const emailRoot = '1234@gmail.com';
    const passowrdRoot = '1234';
    if (form.email === emailRoot && form.password === passowrdRoot) {
      navigate('/home')
    }
    else alert('Correo invalido');
    event.preventDefault();
  };

  const validate = () => {
    if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(form.email)) {
      setErrors({
        ...errors,
        email: 'Por favor, revisa tu email, rey/reina'
      });
    }
    else setErrors({...errors, email: ''})
  };

  return (
    <div className={style.body}>
      <div className={style.half}>
        <div className={style.form}>
          <div className={style.wraper}>
            <span className={style.icon_close}><img className={style.img} src={require('../../img/cerrar.png')} alt='Icono cerrar'/></span>

            <div className={`${style.form_box} ${style.login}`}>
              <h2>Login</h2>
              <form onSubmit={handleOnSubmit}>
                <div className={style.input_box}>
                  <span className={style.icon}><img className={style.img} src={require('../../img/email.png')} alt='Icono de email'/></span>
                  <input name="email" type="text" value={form.email} onChange={handleOnChange} required/>
                  <label>Email</label>
                  {errors.email && <p className={style.p}>{errors.email}</p>}
                </div>
                <div className={style.input_box}>
                  <span className={style.icon}><img className={style.img} src={require('../../img/lock.png')} alt='Icono de passowrd'/></span>
                  <input name="password" type="password" value={form.password} onChange={handleOnChange} required/>
                  <label>Password</label>
                </div>
                <div className={style.remember_forgot}>
                  <label><input type='checkbox'></input> Remember me</label>
                  <NavLink to="#">Forgot Password?</NavLink>
                </div>
                <button type='submit' className={style.btn} disabled={!form.email || !form.password || errors.email} >Login</button>
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