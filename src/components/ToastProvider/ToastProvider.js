import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const createNewToast = React.useCallback((message, variant) => {
        const newToast = {
            id: crypto.randomUUID(),
            variant,
            message,
        };
        setToasts((currentToasts) => [...currentToasts, newToast]);
    }, []);

    const dismissToast = React.useCallback((id) => {
        setToasts((currentToasts) => [
            ...currentToasts.filter((toast) => toast.id !== id),
        ]);
    }, []);

    const value = React.useMemo(
        () => ({
            toasts,
            createNewToast,
            dismissToast,
        }),
        [toasts, createNewToast, dismissToast]
    );

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    );
}

export default ToastProvider;