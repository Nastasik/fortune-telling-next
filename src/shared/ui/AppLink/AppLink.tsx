// 'use client'
import { classNames } from '@shared/lib/classNames/classNames';
import React, { FC, ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';
import Link, { LinkProps } from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY ='secondary'
}

interface AppLinkProps extends LinkProps {
    to?: Url;
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo(({
    className, theme = AppLinkTheme.PRIMARY, children, to, href, ...otherProps
}: AppLinkProps) => (
    <Link
      className={classNames(cls.mainLink, { theme }, [className, cls[theme]])}
      href={href}
      {...otherProps}
    >
        {children}
    </Link>
));
