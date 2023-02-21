import { useState, useEffect, React} from 'react';
import { Body } from '../components/body';
import '../App.css';

export function Homepage(){
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(()=>{
    console.log('useEffectが実行されました')
  },[count])
  return (
    <div>
      <Body title="Home Pages" name="homepageへ遷移" />
      <div className={"App"}>
      <h2>Count: { count }/ Count2: { count2 }</h2>
      <button onClick={() => setCount(count+1)}>Count+</button><br/>
      <button onClick={() => setCount2(count2+1)}>Count2+</button><br/>
      </div>
    </div>
  );
}
