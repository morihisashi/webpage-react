import React from 'react';
/*
{arrayCount.map((val) => 
                <div>{val}</div>
            )};
*/
export function Listpage(){
    const str = sessionStorage.getItem('todoData');
    const array = str.split(',');
    console.log(array);
    return (
        <div>
            <h1>ToDo List</h1>
            {array.map((val) => <li>{val}</li>)}
        </div>
    );
}