import React from 'react';

import './submit-button.css';

type Prop = {
    children: string;
    onClick?: () => void;
    className?: string;
};

const SubmitButton = React.memo(({children, onClick, className: additionClassName}: Prop) => {
    const defaultClassName = "submit-button";
    const className = additionClassName ? `${defaultClassName} ${additionClassName}` : defaultClassName;

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
})

export default SubmitButton;
