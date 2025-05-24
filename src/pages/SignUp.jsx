import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        password1: "",
        password2: "",
    });
    const { firstName, lastName, address, email, password1, password2 } =
        formData;

    // onChange function
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <>
            <form>
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
                    id="password1"
                    value={password1}
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="password2"
                    value={password2}
                    onChange={onChange}
                />

                <button>Sign Up</button>
            </form>
        </>
    );
};
export default SignUp;
