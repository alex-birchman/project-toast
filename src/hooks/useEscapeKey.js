import React from "react";

export function useEscapeKey(callback) {
    React.useEffect(() => {
        const handlEscButton = (event) => {
            if (event.key === "Escape") {
                callback();
            }
        };

        window.addEventListener("keydown", handlEscButton);

        return () => {
            window.removeEventListener("keydown", handlEscButton);
        };
    }, [callback]);
}
