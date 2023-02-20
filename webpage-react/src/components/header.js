import React from 'react';
import './header.css';

export function Header(props){
    return (
        <div className="App">
            <p>headerコンポーネントの作成</p>
            <a className="atag">{props.array[0][0]}</a>
            <a className="atag">{props.array[0][1]}</a>
            <a className="atag">{props.array[0][2]}</a>
        </div>
    );
}