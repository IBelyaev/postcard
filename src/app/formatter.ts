import { TextStyle } from './types';

export function saveDataToLocalStorage(style: TextStyle) {
    Object.keys(style).forEach((key) => {
        localStorage.setItem(key, style[key as keyof TextStyle]);
    });
}

export function getDataFromLocalStorageBtKeys(): TextStyle {
    const DEFAULT_STATE: any = {
        textAlign: 'left',
        color: '#292929',
        fontWeight: 'Bold',
        fontSize: '14',
        lineHeight: '5',
        letterSpacing: '3',
        fontFamily: 'OpenSans',
      };

    Object.keys(DEFAULT_STATE).forEach((key) => {
        const value = localStorage.getItem(key);

        if (value && key in DEFAULT_STATE) {
            DEFAULT_STATE[key] = value;
        }
    });

    return DEFAULT_STATE;
}

export function getFormattedStyleData(style: TextStyle): TextStyle {
    const rareStyleData = { ...style };
    
    rareStyleData.fontSize = rareStyleData.fontSize + 'px';
    rareStyleData.lineHeight = rareStyleData.lineHeight + '%';
    rareStyleData.letterSpacing = rareStyleData.letterSpacing + 'px';

    return rareStyleData;
};

