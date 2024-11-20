// 'use client'
import { classNames } from '@shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
// import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
// import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
// import { getScrollByPath, saveScrollActions } from '@features/saveScroll';
// import { useLocation } from 'react-router-dom';
// import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
// import { useSelector } from 'react-redux';
// import { StateSchema } from '@app/providers/StoreProvider';
// import { useThrottle } from '@shared/lib/hooks/useThrottle';
import { TestProps } from '@shared/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({
    className, children, onScrollEnd, 'data-testid': dataTestid,
}: PageProps) => {
    // const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    // const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    // const dispatch = useAppDispatch();
    // const { pathname } = useLocation();
    // const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    // useInfiniteScroll({
    //     triggerRef,
    //     wrapperRef,
    //     callback: onScrollEnd,
    // });

    // useInitialEffect(() => {
    //     wrapperRef.current.scrollTop = scrollPosition;
    // });

    // const onScroll = useThrottle(({ currentTarget }: UIEvent<HTMLDivElement>) => {
    //     dispatch(saveScrollActions.setScrollPosition({
    //         position: currentTarget.scrollTop,
    //         path: pathname,
    //     }));
    // }, 1000);

    return (
        <main
            // ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            // onScroll={onScroll}
            data-testid={dataTestid ?? 'Page'}
        >
            {children}
            {/* {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null} */}
        </main>
    );
});
