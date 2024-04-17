import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from '../axios'
import ValidationRegister from './validation/validationRegister'

export default function Register() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [retypedPassword, setRetypedPassword] = useState('');
    // const [username, setUsername] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: '',
        retypedPassword: '',
        username: '',
        firstName: '',
        lastName: '',
    })


    const [errors, setError] = useState({})
    
    const navigate = useNavigate();

    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (
            values.email !== '' &&
            values.password !== '' &&
            values.retypedPassword !== '' &&
            values.username !== '' &&
            values.firstName !== '' &&
            values.lastName !== ''
        ) {
            try {
            const request = {
                username: values.username,
                password: values.password,
                retypedPassword: values.retypedPassword,
                firstName: values.firstName,
                lastName: values.lastName,
            };
            const { data } = await axios.post('users', { ...request });
            console.log('Data: ', data);
            navigate('/');
            } catch (error) {
            console.log(error);
            }
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        setError(ValidationRegister(values));

        onSubmit(e);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
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
                                <label htmlFor="password" className="leading-7 text-sm text-gray-400">
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
                            <div className="relative mb-4">
                                <label htmlFor="retypedPassword" className="leading-7 text-sm text-gray-400">
                                    retypedPassword
                                </label>
                                 <input
                                    type="retypedPassword"
                                    value={values.retypedPassword}
                                    onChange={handleChange}
                                    id="retypedPassword"
                                    name="retypedPassword"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.retypedPassword && <p style={{color:"red", fontSize: "13px"}}>{errors.retypedPassword }</p>}
                                {/* <input
                                    type="retypedPassword"
                                    value={retypedPassword}
                                    onChange={(e) => setRetypedPassword(e.target.value)}
                                    id="retypedPassword"
                                    name="retypedPassword"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="username" className="leading-7 text-sm text-gray-400">
                                    username
                                </label>
                                 <input
                                    type="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    id="username"
                                    name="username"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.username && <p style={{color:"red", fontSize: "13px"}}>{errors.username }</p>}
                                {/* <input
                                    type="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                    name="username"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="firstName" className="leading-7 text-sm text-gray-400">
                                    firstName
                                </label>
                                 <input
                                    type="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    id="firstName"
                                    name="firstName"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.firstName && <p style={{color:"red", fontSize: "13px"}}>{errors.firstName }</p>}
                                {/* <input
                                    type="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    id="firstName"
                                    name="firstName"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="lastName" className="leading-7 text-sm text-gray-400">
                                    lastName
                                </label>
                                 <input
                                    type="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    id="lastName"
                                    name="lastName"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.lastName && <p style={{color:"red", fontSize: "13px"}}>{errors.lastName }</p>}
                                {/* <input
                                    type="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    id="lastName"
                                    name="lastName"
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
