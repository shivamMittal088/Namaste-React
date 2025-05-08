import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        // define handlers
        const handleOnline = () => {
            return (
                setOnlineStatus(true)
            )
        }

        const handleOffline = () => {
            return (
                setOnlineStatus(false)
            )
        }

        // add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // cleanup
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
