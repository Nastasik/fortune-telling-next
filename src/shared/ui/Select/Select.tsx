/* eslint-disable no-unused-vars */
"use client"
import { classNames } from '@shared/lib/classNames/classNames';
import React, {
    SelectHTMLAttributes, FC, memo, useEffect, useRef, useMemo, useCallback, ChangeEvent,
} from 'react';
import { Currency } from '@shared/const/common';
import cls from './Select.module.scss';

export enum SelectTheme {
    INDERLINE = 'underline',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'readonly'>;

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    options: SelectOption<T>[];
    value?: T;
    label?: string;
    className?: string;
    readonly?: boolean;
    onChange: (value: T) => void;
}

export const Select = <T extends string>({
    options,
    value,
    onChange,
    className,
    label,
    readonly,
}: SelectProps<T>) => {
    // const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLSelectElement>(null);

    const onChangeHandler = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
        onChange(value as T);
    };

    const optionsList = useMemo(() => options?.map(({ content, value }) => (
        <option key={value} value={value} className={cls.option}>{content}</option>)), []);
    // const handlerChange = useCallback(() => )
    return (
        <div className={classNames(cls.SelectWrapper, {}, [className])}>
            {label && (
                <span className={classNames(cls.label, {}, [])}>
                    {label}
                </span>
            )}
            <select
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
                disabled={readonly}
            >
                {optionsList}
            </select>
            {/* ref={ref}
                type={type}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [cls[theme]])}
                {...otherProps} */}

            {/* <span className={classNames(cls.caret, {}, [])} /> */}
        </div>
    );
};
