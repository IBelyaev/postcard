import React from 'react';

import { TextStyle } from '../../types';

import './working-directory.css';
import { getFormattedStyleData } from '../../formatter';

type Props = {
    textStyle: TextStyle;
}

const WorkingDirectory = ({ textStyle }: Props) => {
    const formattedStyleData = getFormattedStyleData(textStyle);

    return (
        <div className="working-directory">
            <textarea
                style={formattedStyleData}
                className="working-directory__text-area"
                autoFocus={true}
                placeholder="Type Here..."
            />
        </div>
    );
};

export default WorkingDirectory;
