import React, { useState } from 'react';
import AlignLeft from './svg/align-left.svg';
import AlignCenter from './svg/align-center.svg';
import AlignRight from './svg/align-right.svg';
import AlignJustify from './svg/align-justify.svg';
import AlignLeftActive from './svg/align-left-active.svg';
import AlignCenterActive from './svg/align-center-active.svg';
import AlignRightActive from './svg/align-right-active.svg';
import AlignJustifyActive from './svg/align-justify-active.svg';
import LineHeight from './svg/line-height.svg';
import LetterSpacing from './svg/letter-spacing.svg';
import FontSize from './svg/font-size.svg';

import SubmitButton from '../../shared-ui/submit-button';
import MultipleRowsColumn from '../../shared-ui/multiple-rows-column';
import IconButton from '../../shared-ui/icon-button';
import Input from '../../shared-ui/input';
import Select from '../../shared-ui/select';
import { fontStyle, fonts, colors } from './data';
import { TextStyle } from '../../types';
import { getFormattedStyleData, saveDataToLocalStorage } from '../../formatter';

import './settings-panel.css';

type Props = {
    textStyle: TextStyle;
    onChange: (set: TextStyle) => void;
};

const SettingsPanel = ({onChange, textStyle}: Props) => {
    const [style, changeStyle] = useState<TextStyle>(textStyle);

    const createStyleChanger = <T extends keyof TextStyle>(key: T) => (value: TextStyle[T]) => {
        changeStyle((prevState) => ({...prevState, [key]: value }));
    };

    const handleChangeTextAlign = createStyleChanger('textAlign');
    const handleChangeColor = createStyleChanger('color');
    const handleChangeFontWeight = createStyleChanger('fontWeight');
    const handleChangeFontSize = createStyleChanger('fontSize');
    const handleChangeLineHeight = createStyleChanger('lineHeight');
    const handleChangeLetterSpacing = createStyleChanger('letterSpacing');
    const handleChangeFontFamily = createStyleChanger('fontFamily');

    const handleChange = () => {
        onChange(style);
        
        saveDataToLocalStorage(style);
    };

    return (
        <div className="settings-panel">
            <p className="settings-pane__header">text</p>
            <MultipleRowsColumn className="settings-pane__row">
                <Select
                    onClick={handleChangeFontFamily}
                    options={fonts}
                    id={style.fontFamily}

                />
            </MultipleRowsColumn>
            <MultipleRowsColumn rowSizes={[2,1]} className="settings-pane__row">
                <Select
                    onClick={handleChangeFontWeight}
                    options={fontStyle}
                    id={style.fontWeight}
                />
                <Input
                    value={style.fontSize}
                    onChange={handleChangeFontSize}
                    leftIcon={FontSize}
                />
            </MultipleRowsColumn>
            <MultipleRowsColumn className="settings-pane__row">
                <Select
                    onClick={handleChangeColor}
                    options={colors}
                    id={style.color}
                />
            </MultipleRowsColumn>
            <MultipleRowsColumn className="settings-pane__row">
                <Input
                    value={style.lineHeight}
                    onChange={handleChangeLineHeight}
                    leftIcon={LineHeight}
                    postfix="%"
                />
                <Input
                    value={style.letterSpacing}
                    onChange={handleChangeLetterSpacing}
                    leftIcon={LetterSpacing}
                    postfix="px"
                />
            </MultipleRowsColumn>
            <MultipleRowsColumn className="settings-pane__row">
                <IconButton
                    className="settings-pane__btn-first"
                    source={AlignLeft}
                    activeSource={AlignLeftActive}
                    id="left"
                    value={style.textAlign}
                    onClick={handleChangeTextAlign}
                    alt="align-left"
                />
                <IconButton
                    source={AlignCenter}
                    activeSource={AlignCenterActive}
                    id="center"
                    active={true}
                    value={style.textAlign}
                    onClick={handleChangeTextAlign}
                    alt="align-center"
                />
                <IconButton
                    source={AlignRight}
                    activeSource={AlignRightActive}
                    id="right"
                    value={style.textAlign}
                    onClick={handleChangeTextAlign}
                    alt="align-right"
                />
                <IconButton
                    className="settings-pane__btn-last"
                    source={AlignJustify}
                    id="justify"
                    value={style.textAlign}
                    activeSource={AlignJustifyActive}
                    onClick={handleChangeTextAlign}
                    alt="align-justify"
                />
            </MultipleRowsColumn>
            <SubmitButton onClick={handleChange}>
                apply changes
            </SubmitButton>
        </div>
    );
};

export default SettingsPanel;
