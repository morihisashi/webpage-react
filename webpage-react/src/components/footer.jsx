import React from 'react';
import footer from './footer.module.css';
import { Link } from "react-router-dom";

export function Footer(props){
    return (
        <div className={footer.position}>
            <Link to="/webpage-react" className={footer.text}>{props.array[0][0]}</Link>
            <Link to="/webpage-react/about" className={footer.text}>{props.array[0][1]}</Link>
            <Link to="/webpage-react/practical" className={footer.text}>{props.array[0][2]}</Link>
        </div>
    );
}