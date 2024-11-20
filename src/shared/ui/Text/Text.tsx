// "use client"
/* eslint-disable no-unused-vars */
import { classNames } from '@shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY ='secondary',
    ERROR = 'error',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeadertag: Record<TextSize, HeaderTagType> = {
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text: FC<TextProps> = memo(({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
    align = TextAlign.LEFT,
    'data-testid': dataTestId = '',
}: TextProps) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.size]: Boolean(size),
        [cls.align]: Boolean(align),
    };
    const HeaderTag = mapSizeToHeadertag[size];
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>{title}</HeaderTag>}
            {text && <p data-testid={`${dataTestId}.P`} className={cls.text}>{text}</p>}
        </div>
    );
});
