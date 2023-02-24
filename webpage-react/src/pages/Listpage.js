import {React, useState }from 'react';
import '../App.css';

export function Listpage(){
    const str = sessionStorage.getItem('todoData');
    const array = str.split(',');
    const [del, delText] = useState("");
    const [delArrays, setDel] = useState(array);

    const onClickDelText = (val) => {
        delText({val});
        setDel(
            delArrays.filter((delArray, index) => (delArray !== del))
        )
        console.log(delArrays);
        //sessionStorage['todoData'] = delArrays;
    }
    return (
        <div className={"App"}>
            <h1>ToDo List</h1>
            <div className={"list"}>
                {array.map((val) => 
                <div>
                    <div className={"listItmes"}>{val}</div>
                    <button onClick={() => onClickDelText(val)}>削除</button>
                </div>
                )}
            </div>
        </div>
    );
}