import React from 'react';
import { Body } from '../components/body';
import { useForm } from 'react-hook-form';
import '../App.css';

export function Practicalpage(){
    // 初期化
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // フォーム送信ボタンを押された時の処理
    const onsubmit = (data) => {
        console.log(data);
        reset();   // フォームに入力した値をリセット
    };

    return (
    <div className={"App"}>
        <Body title="Practical Pages" name="Practicalpageへ遷移" />
        <form onSubmit={handleSubmit(onsubmit)}>
            <input type="date" {...register('date', { required: '日付を入力してね' })} />
            <p>{errors.date?.message}</p> {/* エラー表示 */}
                <textarea className={"textarea"}
                    {...register('text', {
                    required: 'やることを入力してね',
                    })}
                />
            <p>{errors.text?.message}</p> {/* エラー表示 */}
            <input type="submit" value='保存' />
        </form>
    </div>
    );
}

