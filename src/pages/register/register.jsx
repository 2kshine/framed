import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
      <h1 className="logo">FRAMED</h1>
      <div className="loginTop">
          <h3 className="loginLogo">SIGNUP</h3>
          <span className="loginDesc">
          Frame your Core memories and share it with your friends and family
          </span>
        </div>
        <div className="loginBottom">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
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