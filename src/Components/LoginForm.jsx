import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true); // Initially disabled

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    updateButtonState(e.target.value, password); // Update button state when username changes
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    updateButtonState(username, e.target.value); // Update button state when password changes
  }

  function updateButtonState(usernameValue, passwordValue) {
    if (usernameValue && passwordValue) {
      setDisabled(false); // Enable button when both fields have a value
    } else {
      setDisabled(true); // Disable button when either field is empty
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Perform login logic here
  }

  return (
    <div id="div1">
      <h1>Group 4 Form Submission</h1>
      <form>
        <label style={{ fontSize: "1.3em" }}>Enter your Username:</label>
        <input
          type="text"
          placeholder="username"
          id="username-input"
          value={username}
          required={true}
          onChange={handleUsernameChange}
        />
        <br /> <br />
        <label style={{ fontSize: "1.3em" }}>Enter your Password:</label>
        <input
          type="password"
          placeholder="password"
          id="password-input"
          value={password}
          required={true}
          onChange={handlePasswordChange}
        />
        <br /> <br />
        <button
          type="submit"
          id="login-button"
          onSubmit={handleSubmit}
          disabled={disabled}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
