import {React, useState, useEffect }from 'react';
import '../App.css';

export function Listpage(){
    const str = sessionStorage.getItem('todoData');
    const [array, setArray]= useState(str.split(','));

    const onClickDelArray = (val) => {
        setArray(
            array.filter((del) => (del !== val))
        );
    }

    useEffect(() => {
        sessionStorage['todoData'] = array;
    },[array])

    return ( str !== "" ?
        <div className={"App"}>
            <h1>ToDo List</h1>
            <div className={"list"}>
                {array.map((val) => 
                <div>
                    <div className={"listItmes"}>{val}</div>
                    <button onClick={() => onClickDelArray(val)}>削除</button>
                </div>
                )}
            </div>
        </div>
        :<div>登録データがありません。</div>
    );
}