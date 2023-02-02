import React, { useState } from 'react';

import Arrow from './svg/arrow.svg';

import './select.css';

type Options = {
    value: string;
    title: React.ReactNode;
};

type Props = {
    options: Options[];
    onClick: (s: string) => void;
    id: string;
}

const Select = ({options, onClick, id}: Props) => {
    const [isOpen, setOpen] = useState(false);
    const { title } = options.find(({value}) => value === id) || options[0];
    const handleOpen = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setOpen(!isOpen);
    };

    const handleClose = (e?: React.MouseEvent) => {
        setOpen(false);
    };

    const selectOption = (value: string) => () => {
        onClick(value);
    }

    return (
        <div onClick={handleOpen} className="select">
            <div className="select__title">{title}</div>
            <img className={isOpen ? "select__icon-open" : ""} src={Arrow} alt="arrow" />
            { isOpen && (
                <>
                    <div className="select__options">
                        {options.map(({value, title}) => {
                            return (
                                <div
                                    onClick={selectOption(value)}
                                    key={value}
                                    className="select__option"
                                >
                                    {title}
                                </div>
                            );
                        })}
                    </div>
                    <div onClick={handleClose} className="select__outside" />
                </>
            )}
        </div>
    );
}

export default Select;
