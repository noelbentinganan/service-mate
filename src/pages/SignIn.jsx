import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
// firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.config";

const SignIn = () => {
    const { loggedIn } = useAuthStatus(); // Custom hook to check auth status

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;

    const navigate = useNavigate();

    // Redirect user to homepage if already logged in
    useEffect(() => {
        if (loggedIn) {
            navigate("/");
        }
    });

    // onChange function
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    // onSubmit function
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            // initialize Firebase Auth
            const auth = getAuth(app);
            console.log(auth);

            // create user with email and password
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            // if user is signed in successfully, navigate to home page
            if (userCredential.user) {
                navigate("/");
                console.log("User signed in successfully");
                console.log(userCredential.user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                />
                <button>Sign In</button>
            </form>
        </>
    );
};
export default SignIn;
