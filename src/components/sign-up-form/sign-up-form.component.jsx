import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {};

  return (
    <>
      <div>
        <h1>Sign up with your email and pass</h1>
        <form onSubmit={() => {}}>
          <label>Display Name</label>
          <input type="text" required onChange={handleChange} name="displayName"></input>

          <label>Email</label>
          <input type="email" required onChange={handleChange}></input>

          <label>Password</label>
          <input type="password" required onChange={handleChange}></input>

          <label>Confirm Password</label>
          <input type="password" required onChange={handleChange}></input>

          <button type="submit"></button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
