import React from 'react';
import '../App.css';

export function Listpage(){
    const str = sessionStorage.getItem('todoData');
    const array = str.split(',');
    return (
        <div className={"App"}>
            <h1>ToDo List</h1>
            <div className={"list"}>
                {array.map((val) => <div className={"listItmes"}>{val}</div>)}
            </div>
        </div>
    );
}