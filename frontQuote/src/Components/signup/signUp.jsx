import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { nombre, apellido, email, password } = this.state;
    fetch('http://localhost:5000/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/jason',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password
      }),
    }).then((res) => res.json())
      .then((data) => {
        if (data.status == 'ok') {
          alert('Registro exitoso');
          window.localStorage.setItem('token', data.data);
          window.location.href = '/home-user/*'
        }
      });
  }


  render() {
    return (
        <section className='signup template d-flex justify-content-center align-items-center vh-100 bg-background px-2 px-lg-0'>
          <div className='p-5 rounded-4 bg-primary'>
            <form action='' onSubmit={this.handleSubmit}>
              <h2 className='text-center text-white fw-bold'>Crear una nueva cuenta</h2>
              <p className='text-center mt-3 text-white'>
                ¿Ya tenés una cuenta? <Link to='/login' className='ms-2 text-white'>Iniciá sesión</Link>
              </p>
              <div className='row'>
                <div className='col-12'>
                  <div className='mb-3 text-white'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                      type='text'
                      placeholder='Nombre'
                      className='form-control'
                      onChange={e => this.setState({ nombre: e.target.value })}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='mb-3 text-white'>
                    <label htmlFor='apellido'>Apellido</label>
                    <input
                      type='text'
                      placeholder='Apellido'
                      className='form-control'
                      onChange={e => this.setState({ apellido: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className='mb-3 text-white'>
                <label htmlFor='email'>Correo Electrónico</label>
                <input
                  type='email'
                  placeholder='Correo electrónico'
                  className='form-control'
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className='mb-3 text-white'>
                <label htmlFor='password'>Contraseña</label>
                <input
                  type='password'
                  placeholder='Contraseña'
                  className='form-control'
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
              <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-5'>
                <button className='btn btn-secondary-btn btn-lg fw-bold'>Crear</button>
              </div>
            </form>
          </div>
        </section>
    )
  }

}