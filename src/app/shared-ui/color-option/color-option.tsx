import React from 'react';

import './color-option.css';

type Props = {
    color: string;
};

const ColorOption = React.memo(({color}: Props) => {
    return (
        <div className="color-option">
            <div className="color-option__img" style={{backgroundColor: color }}/>
            {color}
        </div>
    );
});

export default ColorOption;
