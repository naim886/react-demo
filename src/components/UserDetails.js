import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import DataCard from "./partials/DataCard";

const UserDetails = () => {
    const params = useParams()
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getUser = () => {
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => {
            setUser(res.data)
            setIsLoading(false)
        })
    }
    useEffect(() => {
        getUser()
    }, []);


    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4 my-2">
                    <DataCard user_data={user} isLoading={isLoading}/>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
