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
        <button onClick={() => onClickAddText()}>追加</button>

        <p>リアルタイム：{text}</p>

        {/* ↓pタグを追加 */}
        <p>ボタンクリック：{addText}</p>
      </div>
    </div>
  );
}
