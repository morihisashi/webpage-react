import React from 'react';
import '../App.css';

export function Footer(props){
    return (
        <div className="App">
            <p>footerコンポーネントの作成</p>
            <p>{props.name}</p>
        </div>
    );
}