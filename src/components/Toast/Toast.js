import React from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ children, variant, onClose }) {
    const Icon = ICONS_BY_VARIANT[variant];

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <p className={styles.content}>
                <VisuallyHidden>
                    {variant} - {children}
                </VisuallyHidden>
                {children}
            </p>
            <button
                aria-label="Dismiss message"
                aria-live="off"
                className={styles.closeButton}
                onClick={onClose}
            >
                <X size={24} />
            </button>
        </div>
    );
}

export default Toast;
