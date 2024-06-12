import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail]=useState([])
  // const [enteredPassword, setEnteredPassword]=useState([])
  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }
  // function handlePasswordChange(event){
  //   setEnteredEmail(event.target.value)
  // }
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleInputChange(identifier, event) {
    setEnteredValues((pre) => ({
      ...pre,
      [identifier]: event.target.value,
    }));
    setDidEdit(pre=>({
      ...pre,
      [identifier]: false,
    }))
  }
  function handleInputBlur(identifier) {
    setDidEdit((pre) => ({
      ...pre,
      [identifier]: true,
    }));
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
            value={enteredValues.email}
          />

          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleInputChange("password", event)}
            alue={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
