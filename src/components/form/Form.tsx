import React, { useState } from 'react';
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {

    const [text, setText] = useState<string>('');

    // let createText = '';

    const formSubmit = () => {
        if (text) {
            props.createNewToDo(text);
            setText('');
        }
    }

    // const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     createText = event.target.value;
    // }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}