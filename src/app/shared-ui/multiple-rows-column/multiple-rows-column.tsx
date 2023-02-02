import React from 'react';

import './multiple-rows-column.css';

type Prop = {
    children: React.ReactNode;
    rowSizes?: number[];
    className?: string;
};

const MultipleRowsColumn = React.memo(({children, className: additionClassName, rowSizes = []}: Prop) => {
    const defaultClassName = "multiple-rows-column";
    const className = additionClassName ? `${defaultClassName} ${additionClassName}` : defaultClassName;
    let index = -1;

    return (
        <div className={className}>
                {React.Children.map(children, (child: any) => {
                    index++;

                    return (
                        <div className="multiple-rows-column__row"  style={{ flex: rowSizes[index] || 1, display: 'flex' }}>
                            {React.cloneElement(child, {...child.props})}
                        </div>
                    )}
                )}
        </div>
    );
})

export default MultipleRowsColumn;
