/* eslint-disable no-unused-vars */
// "use client"
import { Mods, classNames } from '@shared/lib/classNames/classNames';
import React, {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY ='secondary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo(({
    className,
    square,
    theme = ButtonTheme.PRIMARY,
    children,
    size,
    disabled,
    fullWidth,
    ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls.size]: Boolean(size),
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
