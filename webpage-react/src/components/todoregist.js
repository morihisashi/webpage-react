import { React, useState, useEffect } from 'react';
import '../App.css';

export function TodoRegist(){
    const [text, setText] = useState("");
    const [addText, setAddText] = useState([]);
    const [temporaryText, setTemporaryText] = useState([]);

    const onClickAddText = () => {
        setTemporaryText([...temporaryText, text]);
        setText("");
    }

    const onClickRegistText = () => {
        addText.push(temporaryText);
        sessionStorage['todoData'] = addText;
    }
    
    useEffect(() => {
        const sessionStr = sessionStorage.getItem('todoData');
        if(sessionStr){
            const array = sessionStr.split(',');
            setAddText(array);
        } else {
            sessionStorage['todoData'] = "";
        }
    },[]);

    return (
        <div className={"App"}>
        <div>
          <textarea 
            className={"textarea"}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        {/* ↓buttonを追加 */}
        <button onClick={() => onClickAddText()}>一時保存へ追加</button>
        <p>一時保存されているtodoList</p>
        {temporaryText.map((val) => <div>{val}</div>)}
        <button onClick={() => onClickRegistText()}>登録</button>
      </div>
    );
}