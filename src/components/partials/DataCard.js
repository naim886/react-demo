import React from 'react';
import {Link} from "react-router-dom";

const DataCard = (props) => {
    return (
        <div className="card placeholder-glow">
            {props.user_data != undefined ?
                <>
                    <div className="card-header">
                        <Link className={props.isLoading && 'placeholder'} to={`/user-details/${ props.user_data.id}`}><h4>{props.user_data.name}</h4></Link>
                    </div>
                    <div className="card-body">
                        <p className={props.isLoading && 'placeholder'}>Username : { props.user_data.username}</p>
                        <p className={props.isLoading && 'placeholder'}>Email : { props.user_data.email}</p>
                        <p className={props.isLoading && 'placeholder'}>Phone : { props.user_data.phone} </p>
                        <p className={props.isLoading && 'placeholder'}>Website : { props.user_data.website}</p>
                    </div>
                </> :null

            }

        </div>
    );
};

export default DataCard;
