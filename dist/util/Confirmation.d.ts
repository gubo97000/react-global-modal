import { default as React } from 'react';
import { IButtonProps } from '../Modal/ModalActions';
export interface ConfirmationModalProps {
    title?: string;
    message?: string;
    onCancel?: () => void;
    onOkay?: () => void;
    cancelLabel?: string;
    okayLabel?: string;
    isCloseable?: boolean;
    className?: string;
    confirmationBody?: React.FC;
    confirmationClassName?: string;
    actions?: IButtonProps[] | any;
    footer?: React.ReactNode;
    okyActionProps?: Record<any, any>;
    cancelActionProps?: Record<any, any>;
    [key: string]: any;
}
/**
 * Confirmation Modal
 * Used to handle the confirmation from user and perform action accordingly
 * @param title string // title of the modal
 * @param cancelLabel string
 * @param okayLabel string
 * @param message string
 * @param onCancel Function
 * @param onOkay Function
 * @param closable bool
 * @param confirmationBody React Functional Component
 * @param footer React Node
 * @param confirmationClassName string
 */
export declare const ConfirmationModal: ({ title, cancelLabel, message, okayLabel, onCancel, onOkay, isCloseable, confirmationBody: ConfirmationBody, confirmationClassName, className, actions, footer, okyActionProps, cancelActionProps, ...args }: ConfirmationModalProps) => void;
//# sourceMappingURL=Confirmation.d.ts.map