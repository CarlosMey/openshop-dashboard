import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(){
    return (
        <div>
            <p>this is Dashboard</p>
            <Link className='underline' to="/products">
                Go to Products
            </Link>
        </div>
    )
    
}