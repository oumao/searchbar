import React from 'react';

export default function User({user, location}){
    <div className="container">
        <div className="card">
            <p className="card-title">Name: { user }</p>
            <p>Country: {location}</p>
        </div> 
    </div>
}