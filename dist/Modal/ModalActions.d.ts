export interface IButtonProps {
    title?: string;
    className?: string;
    onClick: () => void;
    props?: any;
}
export interface IModalActionsProps {
    actions?: IButtonProps[];
    className?: string;
}
export declare const ModalActions: ({ className, actions }: IModalActionsProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ModalActions.d.ts.map