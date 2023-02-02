import React from 'react';

import './icon-button.css';
import { TextAlign } from '../../types';

type Props = {
    source: string;
    activeSource: string;
    id: TextAlign;
    onClick: (id: TextAlign) => void;
    active?: boolean;
    className?: string;
    alt?:string;
    value?: TextAlign;
};

const IconButton = React.memo(({source, value, active, id, onClick, activeSource, alt, className: additionClass}: Props) => {
    let className = 'icon-button';
    className = additionClass ? `${className} ${additionClass}` : className;
    className = active ? `${className} ${className}__active` : className;
    const handelChange = () => onClick(id);

    return (
        <button onClick={handelChange} className={className}>
            <img src={value === id ? activeSource : source} alt={alt} />
        </button>
    );
});

export default IconButton;
