import React from 'react';
import footer from './footer.module.css';
import { Link } from "react-router-dom";

export function Footer(props){
    return (
        <div className={footer.position}>
            <p className={footer.text}>footerコンポーネントの作成</p>
            <Link to="/" className={footer.text}>{props.array[0][0]}</Link>
            <Link to="/about" className={footer.text}>{props.array[0][1]}</Link>
            <Link to="/practical" className={footer.text}>{props.array[0][2]}</Link>
        </div>
    );
}