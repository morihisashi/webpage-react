import React from 'react';
import header from './header.module.css';
import { Link } from "react-router-dom";

export function Header(props){
    return (
        <div className={header.atag}>
            <p>headerコンポーネントの作成</p>
            <Link to="/webpage-react" className={header.atag}>{props.array[0][0]}</Link>
            <Link to="/webpage-react/list">todoの一覧へ</Link>
            <Link to="/webpage-react/about" className={header.atag}>{props.array[0][1]}</Link>
            <Link to="/webpage-react/practical" className={header.atag}>{props.array[0][2]}</Link>
            <Link to="/webpage-react/practicallist">Practical List</Link>
        </div>
    );
}