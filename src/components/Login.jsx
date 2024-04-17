import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from '../axios'
import Validation from './validation/validation'

export default function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setError] = useState({})
    
    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    const onSubmit = async (e) => {
      e.preventDefault();
    
      if (values.email !== '' && values.password !== '') {
        try {
          const { data } = await axios.post('auth/login', {
            email: values.email,
            password: values.password
          });
          console.log('Data: ', data);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      setError(Validation(values));
    
      onSubmit(e);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
            {/* <form onSubmit={ onSubmit }> */}
                <section className="text-gray-400 bg-gray-900 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-white">
                                Slow-carb next level shoindxgoitch ethical authentic, poko scenester
                            </h1>
                            <p className="leading-relaxed mt-4">
                                Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder
                                roathse. Craies vegan tousled etsy austin.
                            </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.email && <p style={{color:"red", fontSize: "13px"}}>{errors.email }</p>}
                                {/* <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.password && <p style={{color:"red", fontSize: "13px"}}>{errors.password }</p>}
                                {/* <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                            </div>
                            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Button
                            </button>
                            <p className="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}
