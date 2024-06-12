import Input from "./input";
import {isEmail , isNotEmpty , hasMinLength} from '../util/validation'
import { useInput } from "../hooks/useInput";
export default function Login() {
   const {value:emailValue , handleInputChange:handleEmailChange , handleInputBlur:haandleEmailBlur , hasError:emailHasError}=useInput('' ,(value)=>isEmail(value) && isNotEmpty(value))
const{value:passwordValue , handleInputChange:handlePasswordChange , handleInputBlur:haandlePasswordBlur , hasError:PasswordHasError}=useInput('',(value)=>hasMinLength(6))

  function handleSubmit(event) {
    if(emailHasError || PasswordHasError){return }
    event.preventDefault();

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
      <Input
        id="email"
        label="email"
        type="email"
        name="email"
        onBlur={haandleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        error={emailHasError && ' please enter a valid email'}
      />

      <Input
        id="password"
        label="password"
        type="password"
        name="password"
        onBlur={haandlePasswordBlur}
        onChange={handlePasswordChange}
        value={passwordValue}
        error={PasswordHasError && "please enter a valid password"}
      />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
