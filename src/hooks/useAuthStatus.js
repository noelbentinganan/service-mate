import { useEffect, useState, useRef } from "react";
// firebase imports
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    const isMounted = useRef(true); // For mounting issues - cleanup

    useEffect(() => {
        if (isMounted) {
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {
                // If user is logged in, set loggedIn to true
                if (user) {
                    setLoggedIn(true);
                }

                setCheckingStatus(false);
            });
        }
        return () => {
            isMounted.current = false;
        };
    }, [isMounted]);

    return { loggedIn, checkingStatus };
};

export default useAuthStatus;
