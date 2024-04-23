import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getOrderEmployees } from '../lib/helpers'
import axios from '../axios'
// import PopularProducts from '../components/PopularProducts'




export default function Workers() {




    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('workers');
                console.log('Data: ', data);
                setWorkers(data);
                console.log(workers);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchData();
    }, []);

	return (
		<div >

            <div>
                <div className="bg-white px-4 pt-3 w-full pb-4 rounded-sm border border-gray-200 flex-1 mt-5">
                    <strong className="text-gray-700 font-medium">Recent Employees</strong>
                    <div className="border-x border-gray-200 rounded-sm mt-3">
                        <table className="w-full text-gray-700">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido Paterno</th>
                                    <th>Apellido Materno</th>
                                    <th>Cargo</th>
                                    <th>Tipo de Documento</th>
                                    <th>Numero de Documento</th>
                                    <th>Contracto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workers.map((worker) => (
                                    <tr key={worker.id}>
                                        <td>
                                           {worker.name}
                                        </td>
                                        <td>
                                           {worker.apPat}
                                        </td>
                                        <td>
                                            {worker.apMat}
                                        </td>
                                        <td>
                                           {worker.charge}
                                        </td>
                                        <td>
                                            {worker.documentType}
                                        </td>
                                        <td>
                                            {worker.documentNumber}
                                        </td>
                                        <td>{worker.contractType}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

		</div>
	)
}