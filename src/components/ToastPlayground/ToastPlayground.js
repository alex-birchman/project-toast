import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [showToast, setShowToast] = React.useState(false);

    const handleCreateToast = (event) => {
        event.preventDefault();
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
        setVariant(VARIANT_OPTIONS[0]);
        setMessage("");
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            {showToast && (
                <Toast
                    message={message}
                    variant={variant}
                    onClose={handleCloseToast}
                />
            )}
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
