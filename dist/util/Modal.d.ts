import { default as React } from 'react';
import { IGlobalModalOpenProps } from '../ModalWrapper/WrapperGlobalComponent';
/**
 * GlobalModal is a class that provides a global modal dialog.
 * It uses a reference to a modal component to control the modal's behavior.
 *
 * @class
 */
export declare class GlobalModal {
    _globalModalRef: null;
    /**
     * GlobalModal is a class that provides a global modal dialog.
     * It uses a reference to a modal component to control the modal's behavior.
     *
     * @class
     */
    static setUpModal(ref: React.Ref<any>): void;
    /**
     * GlobalModal is a class that provides a global modal dialog.
     * It uses a reference to a modal component to control the modal's behavior.
     *
     * @class
     */
    static push({ ...args }: IGlobalModalOpenProps): void;
    /**
     * Updates the properties of the modal at the specified index.
     *
     * @static
     * @param {object} props - The new properties to apply to the modal.
     * @param {number} modalIndex - The index of the modal to update.
     */
    static add({ props, modalIndex }: {
        props: Record<any, any>;
        modalIndex: number;
    }): void;
    /**
     * Closes the modal at the specified index.
     *
     * @static
     * @param {number} [index] - The index of the modal to close. If not specified, the last modal is closed.
     */
    static pop(index?: number): void;
    /**
     * Closes all modals.
     *
     * @static
     */
    static closeAll(): void;
}
//# sourceMappingURL=Modal.d.ts.map