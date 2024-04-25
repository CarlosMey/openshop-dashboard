import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../axios/axios'
import Validation from './validation/validation'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToken } from '../tokenReducer'
import {Input} from "@nextui-org/react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import {DeleteIcon} from "./icons/DeleteIcon";
import {Tooltip } from "@nextui-org/react";


export default function WorkerCreate() {

    // const dispatch = useDispatch();

    // const tokens = useSelector((state) =>state.tokens);
    // console.log("useSelector: "+tokens);



    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        documentType: '',
        documentNumber: '',
        apPat: '',
        apMat: '',
        englishLevel: '',
        charge: '',
        birthdate: '',
        contractType: '',
        hiringDate: '',
        phoneNumber: '',
        district: '',
        province: '',
        department: '',
        familiarAssignment: '',
        techSkills: [],
        // emergencyContacts: [],
    })

    const [errors, setError] = useState({})

    function handleChange(e) {
        e.preventDefault()
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError(Validation(values))
        console.log('errors', errors)
        try {
            const { data } = await axios.post('auth/login', {
                email: values.email,
                password: values.password
            })
            // dispatch(addToken(data.token))

            // console.log(values.email, values.password)

            console.log('Data: ', data.token)

            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const isFormFilled = values.name 
    && values.documentType
    && values.documentNumber
    && values.apPat
    && values.apMat
    && values.englishLevel
    && values.charge
    && values.birthdate
    && values.contractType
    && values.hiringDate
    && values.phoneNumber
    && values.district
    && values.province
    && values.department
    // && values.familiarAssignment
    // && values.techSkills

    const [isInvalid, setIsInvalid] = React.useState(true);


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddSkill = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
          const updatedSkills = [...values.techSkills, inputValue.trim()];
          setValues({
            ...values,
            techSkills: updatedSkills,
          });
          setInputValue('');
        }

        console.log(values, values.techSkills);
      };
  
    const handleRemoveSkill = (index) => {
      const updatedSkills = values.techSkills.filter((_, i) => i !== index);
      setValues({
        ...values,
        techSkills: updatedSkills,
      });

      
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleAddSkill(event); // Pasa el evento aquí
        }
      };
    
      

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

                    <div className="border-2 border-green-600 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <div className='flex justify-center'>
                                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Agregar Colaborador</h2>
                            </div>
                            <div className='grid grid-cols-4 gap-4'>
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-900">
                                        Nombres
                                    </label>
                                    <input
                                        type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.name && <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="apPat" className="leading-7 text-sm text-gray-900">
                                        Apellido Paterno
                                    </label>
                                    <input
                                        type="text"
                                        value={values.apPat}
                                        onChange={handleChange}
                                        id="apPat"
                                        name="apPat"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.apPat && <p style={{ color: 'red', fontSize: '13px' }}>{errors.apPat}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="apMat" className="leading-7 text-sm text-gray-900">
                                        Apellido Materno
                                    </label>
                                    <input
                                        type="text"
                                        value={values.apMat}
                                        onChange={handleChange}
                                        id="apMat"
                                        name="apMat"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.apMat && <p style={{ color: 'red', fontSize: '13px' }}>{errors.apMat}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-900">
                                        Numero de Celular
                                    </label>
                                    <input
                                        type="number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.phoneNumber && <p style={{ color: 'red', fontSize: '13px' }}>{errors.phoneNumber}</p>}
                                </div>
                            </div>


                            <div className='grid grid-cols-4 gap-4'>
                            <div className="relative mb-4">
                                    <label htmlFor="englishLevel" className="leading-7 text-sm text-gray-900">
                                        Nivel de Ingles
                                    </label>
                                    <input
                                        type="text"
                                        value={values.englishLevel}
                                        onChange={handleChange}
                                        id="englishLevel"
                                        name="englishLevel"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.englishLevel && <p style={{ color: 'red', fontSize: '13px' }}>{errors.englishLevel}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="documentType" className="leading-7 text-sm text-gray-900">
                                        Tipo de Documento
                                    </label>
                                    <input
                                        type="text"
                                        value={values.documentType}
                                        onChange={handleChange}
                                        id="documentType"
                                        name="documentType"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.documentType && <p style={{ color: 'red', fontSize: '13px' }}>{errors.documentType}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="documentNumber" className="leading-7 text-sm text-gray-900">
                                        Numero de Documento
                                    </label>
                                    <input
                                        type="text"
                                        value={values.documentNumber}
                                        onChange={handleChange}
                                        id="documentNumber"
                                        name="documentNumber"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.documentNumber && <p style={{ color: 'red', fontSize: '13px' }}>{errors.documentNumber}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="birthdate" className="leading-7 text-sm text-gray-900">
                                        Fecha de Nacimiento
                                    </label>
                                    <input
                                        type="date"
                                        value={values.birthdate}
                                        onChange={handleChange}
                                        id="birthdate"
                                        name="birthdate"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.birthdate && <p style={{ color: 'red', fontSize: '13px' }}>{errors.birthdate}</p>}
                                </div>
                            </div>



                            <div className='grid grid-cols-4 gap-4'>
                                <div className="relative mb-4">
                                    <label htmlFor="address" className="leading-7 text-sm text-gray-900">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        value={values.address}
                                        onChange={handleChange}
                                        id="address"
                                        name="address"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.address && <p style={{ color: 'red', fontSize: '13px' }}>{errors.address}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="district" className="leading-7 text-sm text-gray-900">
                                    Distrito
                                    </label>
                                    <input
                                        type="text"
                                        value={values.district}
                                        onChange={handleChange}
                                        id="district"
                                        name="district"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.district && <p style={{ color: 'red', fontSize: '13px' }}>{errors.district}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="province" className="leading-7 text-sm text-gray-900">
                                        Provincia
                                    </label>
                                    <input
                                        type="text"
                                        value={values.province}
                                        onChange={handleChange}
                                        id="province"
                                        name="province"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.province && <p style={{ color: 'red', fontSize: '13px' }}>{errors.province}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="department" className="leading-7 text-sm text-gray-900">
                                        Departamento
                                    </label>
                                    <input
                                        type="text"
                                        value={values.department}
                                        onChange={handleChange}
                                        id="department"
                                        name="department"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.department && <p style={{ color: 'red', fontSize: '13px' }}>{errors.department}</p>}
                                </div>
                            </div>










                            <div className='flex justify-center mt-20'>
                                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Datos Laborales</h2>
                            </div>
                            <div className='grid grid-cols-4 gap-4 '>
                            <div className="relative mb-4">
                                    <label htmlFor="hiringDate" className="leading-7 text-sm text-gray-900">
                                        Fecha de Contratación
                                    </label>
                                    <input
                                        type="date"
                                        value={values.hiringDate}
                                        onChange={handleChange}
                                        id="hiringDate"
                                        name="hiringDate"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.hiringDate && <p style={{ color: 'red', fontSize: '13px' }}>{errors.hiringDate}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="contractType" className="leading-7 text-sm text-gray-900">
                                        Tipo de Contrato
                                    </label>
                                    <input
                                        type="text"
                                        value={values.contractType}
                                        onChange={handleChange}
                                        id="contractType"
                                        name="contractType"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.contractType && <p style={{ color: 'red', fontSize: '13px' }}>{errors.contractType}</p>}
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="charge" className="leading-7 text-sm text-gray-900">
                                        Cargo
                                    </label>
                                    <input
                                        type="text"
                                        value={values.charge}
                                        onChange={handleChange}
                                        id="charge"
                                        name="charge"
                                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    {errors.charge && <p style={{ color: 'red', fontSize: '13px' }}>{errors.charge}</p>}
                                </div>
                                <div className="relative">
                                    <label htmlFor="techSkills" className="leading-7 text-sm text-gray-900">
                                        Habilidades
                                    </label>
                                    <div className=''>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            id="techSkills"
                                            name="techSkills"
                                            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-700 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            placeholder="Ingrese una habilidad"
                                            />
                                        {/* <div className='flex justify-center rounded-lg bg-green-700 text-white w-fit p-2 mt-3'>
                                            <button onClick={handleAddSkill}>Agregar</button>
                                        </div> */}
                                            {errors.techSkills && <p style={{ color: 'red', fontSize: '13px' }}>{errors.techSkills}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-4 mt-5'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <ul>
                                {values.techSkills.map((skill, index) => (
                                    <li key={index}>
                                        <div className='flex bg-teal-700 rounded-2xl p-2 text-white w-fit'>{skill}
                                            <button onClick={() => handleRemoveSkill(index)}> 
                                                <Tooltip color="danger" content="Borrar">
                                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                        <DeleteIcon />
                                                    </span>
                                                </Tooltip>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </div>


                            <button disabled={!isFormFilled} className="text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Agregar
                            </button>
                        </div>

                        


                        
                    </div>
                </div>
            </form>
        </div>
    )
}
