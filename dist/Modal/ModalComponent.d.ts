import { default as React } from 'react';
import { IButtonProps } from './ModalActions';
export interface IModalProps {
    open?: boolean;
    responsive?: boolean;
    children?: any;
    className?: string;
    onClose?: () => void;
    modalSize?: 'xs' | 'sm' | 'md' | 'lg';
    isCloseable?: boolean;
    closeButtonClassName?: string;
    title?: string;
    hideHeader?: boolean;
    headerComponent?: React.FC<any>;
    headerClassName?: string;
    actions?: IButtonProps[] | any[];
    actionClassName?: string;
    contentClassName?: string;
    onModalClose?: () => void;
    hideCloseIcon?: boolean;
    width?: string;
    isSlidePane?: boolean;
    position?: 'right' | 'left';
    isDark?: boolean;
    disableTheme?: boolean;
    footer?: React.ReactNode;
    closeIconComponent?: React.ReactNode;
    [key: string]: any;
}
export declare const ModalComponent: React.ForwardRefExoticComponent<Omit<IModalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ModalComponent.d.ts.map