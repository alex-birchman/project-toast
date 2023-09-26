import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
    const { toasts, dismissToast } = React.useContext(ToastContext);

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {toasts.map(({ id, variant, message }) => (
                <li key={id} className={styles.toastWrapper}>
                    <Toast variant={variant} onClose={() => dismissToast(id)}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default React.memo(ToastShelf);
