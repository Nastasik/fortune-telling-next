
import { classNames } from '@shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(({
    className, Svg, inverted, ...otherProps
}: IconProps) => (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} {...otherProps} />
));
