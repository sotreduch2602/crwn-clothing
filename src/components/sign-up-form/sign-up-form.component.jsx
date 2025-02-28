import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div>
        <h1>Sign up with your email and pass</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          ></input>

          <label>Email</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          ></input>

          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          ></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
