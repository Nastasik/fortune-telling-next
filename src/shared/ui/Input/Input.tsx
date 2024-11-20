/* eslint-disable no-unused-vars */
import { classNames } from '@shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, FC, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    INDERLINE = 'underline',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
    theme?: InputTheme;
    title?: string;
    className?: string;
    value?: string | number;
    autofocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(({
    value,
    onChange,
    className,
    title,
    autofocus,
    readonly,
    type = 'text',
    theme = InputTheme.OUTLINE,
    ...otherProps
}: InputProps) => {
    // const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            // setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(value);
    };
    return (
        <div className={classNames(cls.InputWrapper, { [cls.readonly]: readonly }, [className])}>
            {title && (
                <div className={classNames(cls.title, {}, [])}>
                    {title}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [cls[theme]])}
                {...otherProps}
            />
            {/* <span className={classNames(cls.caret, {}, [])} /> */}
        </div>
    );
});
