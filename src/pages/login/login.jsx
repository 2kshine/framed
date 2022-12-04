import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
      <h1 className="logo">FRAMED</h1>
        <div className="loginTop">
          <h3 className="loginLogo">LOGIN</h3>
          <span className="loginDesc">
          Frame your Core memories and share it with your friends and family
          </span>
        </div>
        <div className="loginBottom">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            <button className="loginRegisterButtonGoogle">
              Login with  <i class="fa-brands fa-google"></i> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}