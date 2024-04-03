import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setcatagories] = useState([])
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setcatagories(data))
    }, [])

    return (
        <div>
            <h1 className='font-[600]'>All Category</h1>
            <ul>
                {
                    catagories.map(catagorie => <li key={catagorie.id} className='text-gray-500 ml-5 mt-2'><Link to={`category/${catagorie.id}`}>{catagorie.name}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideNav;