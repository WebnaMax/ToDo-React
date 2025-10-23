import React, { useState } from 'react';
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled';

import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {

    const [text, setText] = useState<string>('');

    // let createText = '';

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (text) {
            props.createNewToDo(text);
            setText('');
        }
    }

    // const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     createText = event.target.value;
    // }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}