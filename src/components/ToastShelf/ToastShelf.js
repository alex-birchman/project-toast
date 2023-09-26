import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onClose }) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map(({ id, variant, message }) => (
                <li key={id} className={styles.toastWrapper}>
                    <Toast id={id} variant={variant} onClose={onClose}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
