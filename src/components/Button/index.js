import React from 'react';
import './index.css';

export default function Button(props){
    return <button className="btn" onClick={props.breakCookie}>{props.name}</button>
}