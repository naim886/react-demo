import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import DataCard from "./partials/DataCard";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getUsers = () => {
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getUsers()
    }, []);


    return (
        <div className='container my-5'>
            <div className="row">
                {users.map((user, index) => (

                    <div className="col-md-4 my-2" key={index}>
                        <DataCard user_data={user} isLoading={isLoading} />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Home;
