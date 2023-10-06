import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class login extends Component {
constructor (props) { //El constructor se utiliza para inicializar el estado del componente. 
  super(props);
  this.state = {
    email: '',
    password: '',
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e) { //se utiliza para realizar una solicitud de inicio de sesión al servidor
  e.preventDefault();
  const { email, password } = this.state;
  fetch('http://localhost:5000/login', {
    method:'POST',
    crossDomain:true,
    headers:{
      'Content-Type':'application/json',
      Accept: 'application/jason',
      'Access-Control-Allow-Origin':'*',
    },
    body:JSON.stringify({
      email,
      password,
    }),
  }).then((res)=>res.json())
  .then((data)=>{
      if (data.status == 'ok'){
        alert('Login exitoso');
        window.localStorage.setItem('token', data.data);
        window.location.href = '/home-user/*'
      }
  });
}

render() {
  return (
    <section className= 'login template d-flex justify-content-center align-items-center vh-100 bg-background px-2 px-lg-0'> 
        <div className='form_container p-5 rounded-4 bg-primary'>
          <form action='' onSubmit={this.handleSubmit}>
        <h2 className='text-center text-white mb-5 fw-bold'>Ingresá a tu cuenta</h2>
        <div className='mb-3 text-white'>
          <label htmlFor='email'>Correo Electrónico</label>
          <input 
          type='email' 
          placeholder='Tu correo electrónico' 
          className='form-control'
          onChange={e=>this.setState({ email: e.target.value })}/>
        </div>
        <div className='mb-2 text-white'>
          <label htmlFor='password'>Contraseña</label>
          <input 
          type='password' 
          placeholder='Tu contraseña' 
          className='form-control'
          onChange={e=>this.setState({ password: e.target.value })}/>
        </div>
        <div className='mb-2'>
          <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
          <label htmlFor='check' className='custom-input-label ms-2 text-white'>
            Recordame
          </label>
        </div>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-5'>
          <button className='btn btn-secondary-btn btn-lg'>Ingresar</button>
        </div>
        <p className='text-end mt-2 text-white'>
        <a href='/*' className='text-white'>¿Olvidaste tu contraseña?</a><Link to='/register' className='ms-2 text-white'>Registrate</Link>
        </p>
          </form>
        </div>
    </section>
  )
}
}
