import { default as React } from 'react';
export interface IModalHeader {
    children?: React.ReactNode;
    className?: string;
    onBackdropClick?: () => void;
    hideCloseIcon?: boolean;
    closeIconComponent: React.ReactNode;
}
export declare const ModalHeader: ({ children, className, onBackdropClick, hideCloseIcon, closeIconComponent, }: IModalHeader) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ModalHeader.d.ts.map