/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Mods, classNames } from '@shared/lib/classNames/classNames';
import {
    ReactNode,
} from 'react';
import { Portal } from '@shared/ui/Portal';
import { Overlay } from '@shared/ui/Overlay';
import cls from './Modal.module.scss';
import { useModal } from '@shared/lib/hooks/useModal';

interface ModalProps {
    children?: ReactNode;
    className?: string;
    isOpen: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
    children, className, isOpen, onClose, lazy,
}: ModalProps) => {
    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={classNames(cls.content, {}, [])}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
