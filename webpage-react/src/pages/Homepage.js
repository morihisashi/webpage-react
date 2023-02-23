import { useState, React} from 'react';
import { Body } from '../components/body';
import '../App.css';

export function Homepage(){
  const [text, setText] = useState("");
  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState([]);

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText([...addText, text]);
    setText("");
  }

  /* ↓関数onClickAddTextを定義 */
  const onClickRegistText = () => {
    sessionStorage['todoData'] = addText;
  }
  /*
  useEffect(() => {
    console.log(addText);
  },[text]);
  */
  return (
    <div>
      <Body title="ToDo app" name="登録画面" />
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
        {addText.map((val) => <li>{val}</li>)}
        <button onClick={() => onClickRegistText()}>登録</button>
      </div>
      
    </div>
  );
}
