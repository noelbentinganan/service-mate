import { useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase imports
import { app, db } from "../firebase.config"; // Ensure this path is correct
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        password: "",
    });

    const { firstName, lastName, address, email, password } = formData;

    const navigate = useNavigate();

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
            const auth = getAuth(app);

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            // Get the newly created user
            const user = userCredential.user;

            updateProfile(user, {
                displayName: firstName, // Set the displayName as firstName
            });

            // Save to firestore, minus the password
            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid), formDataCopy);

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    value={firstName}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    value={lastName}
                    onChange={onChange}
                />

                <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    value={address}
                    onChange={onChange}
                />

                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={onChange}
                />

                <button>Sign Up</button>
            </form>
        </>
    );
};
export default SignUp;
