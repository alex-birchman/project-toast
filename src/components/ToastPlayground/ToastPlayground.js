import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [toasts, setToasts] = React.useState([]);

    const handleCreateToast = (event) => {
        event.preventDefault();
        const newToast = {
            id: crypto.randomUUID(),
            variant,
            message,
        };
        setToasts((currentToasts) => [...currentToasts, newToast]);

        // Clean form
        setVariant(VARIANT_OPTIONS[0]);
        setMessage("");
    };

    const handleCloseToast = (id) => {
        setToasts((currentToasts) => [
            ...currentToasts.filter((toast) => toast.id !== id),
        ]);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toasts={toasts} onClose={handleCloseToast} />
            <form
                className={styles.controlsWrapper}
                onSubmit={handleCreateToast}
            >
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            required
                            id="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className={styles.messageInput}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((option) => (
                            <label key={option} htmlFor={`variant-${option}`}>
                                <input
                                    id={`variant-${option}`}
                                    type="radio"
                                    name="variant"
                                    value={option}
                                    checked={variant === option}
                                    onChange={(event) =>
                                        setVariant(event.target.value)
                                    }
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button type="submit">Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
