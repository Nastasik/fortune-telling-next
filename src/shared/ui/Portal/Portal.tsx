/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import {
    ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({
    children,
    element = document.body,
}: PortalProps) => createPortal(children, element);
