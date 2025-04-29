import { default as React, Component } from 'react';
import { IButtonProps } from '../Modal/ModalActions';
export type GlobalModalComponentProps = {
    component?: React.FC<any>;
    props?: {
        [key: string]: unknown;
    };
    onClose?: () => void;
    className?: string;
    modalSize?: 'xs' | 'sm' | 'md' | 'lg';
    isCloseable?: boolean;
    closeButtonClassName?: string;
    title?: string;
    hideHeader?: boolean;
    headerComponent?: React.FC<any>;
    headerClassName?: string;
    actions?: IButtonProps[];
    actionClassName?: string;
    contentClassName?: string;
    hideCloseIcon?: boolean;
    width?: string;
    isSlidePane?: boolean;
    position?: 'right' | 'left';
    [key: string]: any;
};
export interface IGlobalModalOpenProps extends GlobalModalComponentProps {
    component?: React.FC<any>;
    ref?: any;
    id?: number;
}
export type GlobalModalWrapperProps = {
    customModal?: React.FC<any>;
};
/**
 * GlobalModalWrapper is a higher-order component that wraps another component
 * and provides it with modal functionality. It uses the GlobalModalComponent
 * to render the wrapped component inside a modal dialog.
 *
 * @component
 *
 * @param {object} props - The properties that define the behavior of the modal and the wrapped component.
 * @param {boolean} props.isOpen - Determines whether the modal is open or not.
 * @param {React.ComponentType} props.component - The component to be wrapped and rendered inside the modal.
 * @param {object} props.props - The properties to pass to the wrapped component.
 * @param {boolean} [props.isCloseable=false] - Determines whether the modal can be closed by the user.
 * @param {function} [props.onClose=() => {}] - The function to call when the modal is closed.
 * @param {string} props.width - The width of the modal.
 *
 * @returns {React.Component} The GlobalModalWrapper component.
 */
export declare class GlobalModalWrapper extends Component<GlobalModalWrapperProps, {
    modals: IGlobalModalOpenProps[];
}> {
    state: any;
    totalIndex: number;
    open: ({ ...args }: IGlobalModalOpenProps) => void;
    close: (index?: number) => void;
    updateModalProps: ({ ...props }: {
        [key: string]: any;
    }, index?: number) => void;
    closeAll: () => void;
    render(): any;
}
//# sourceMappingURL=WrapperGlobalComponent.d.ts.map