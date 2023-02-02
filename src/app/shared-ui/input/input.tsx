import React, { ChangeEvent } from 'react';

import './input.css';

type Props = {
    onChange: (s: string) => void;
    value: string;
    leftIcon?: string;
    postfix?: string;
    maxLength?: number;
};

const Input = ({onChange, value = '', leftIcon, postfix, maxLength = 900000000}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e?.target.value);

    return (
        <div className="input__wrapper">
            { !!(leftIcon) && (
                <img className="input__icon input__icon-left" src={leftIcon} alt="left_icon"/>
            ) }
            <input value={value} onChange={handleChange} className={!!(postfix) ? "input__text-area" : "input__text-area input__text-area__one-icon"} maxLength={maxLength} />
            { !!(postfix) && (
                <span className="input__postfix">{postfix}</span>
            ) }
        </div>
    );
};

export default Input;
