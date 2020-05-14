import React from 'react';

import "./index.css";

export default function Card(props){
    return (
        <div className="card">
            <p>{'"'+props.luck+'"'}</p>
            {props.children}
        </div>
    )
}