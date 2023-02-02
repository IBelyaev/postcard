import React from 'react';

import ColorOption from '../../shared-ui/color-option';

export const fontStyle = [
    {
        value: 'normal',
        title: 'Normal'
    },
    {
        value: 'lighter',
        title: 'Lighter'
    },
    {
        value: 'bold',
        title: 'Bold'
    }
];

export const fonts = [
    {
        value: 'OpenSans',
        title: 'Open Sans'
    },
    {
        value: 'FiraSans',
        title: 'Fira Sans'
    },
    {
        value: 'Roboto',
        title: 'Roboto'
    },
];

export const colors = [
    {
        value: '#292929',
        title: <ColorOption color="#292929" />,
    },
    {
        value: '#ff0000',
        title: <ColorOption color="#ff0000" />,
    },
    {
        value: '#2fa75c',
        title: <ColorOption color="#2fa75c" />,
    }
]
