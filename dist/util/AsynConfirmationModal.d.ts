import { default as React } from 'react';
import { IButtonProps } from '../Modal/ModalActions';
export interface AsyncConfirmationModalProps {
    title?: string;
    message?: string;
    cancelLabel?: string;
    okayLabel?: string;
    isClosable?: boolean;
    confirmationBody?: React.FC;
    confirmationClassName?: string;
    className?: string;
    actions?: IButtonProps[] | any;
    footer?: React.ReactNode;
    okyActionProps?: Record<any, any>;
    cancelActionProps?: Record<any, any>;
    [key: string]: any;
}
/**
 * Async Confirmation Modal
 * Can be used to take a response from the user and perform action based on user decision
 * @param title string
 * @param cancelLabel string
 * @param okayLabel string
 * @param closable bool
 * @param message string
 * @param confirmationBody React Functional Component
 * @param confirmationClassName string
 * @param className string
 * @param footer React Node
 * @returns Promise
 */
export declare const AsyncConfirmationModal: ({ cancelLabel, okayLabel, message, title, isClosable, confirmationBody: ConfirmationBody, confirmationClassName, className, actions, footer, okyActionProps, cancelActionProps, ...args }: AsyncConfirmationModalProps) => Promise<boolean>;
//# sourceMappingURL=AsynConfirmationModal.d.ts.map