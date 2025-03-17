
import { useState } from "react";
import { Link } from "react-router";

function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registr">
      <form className="registr__form">
        <p className="registr__form-text">Заполните форму</p>
        <input
          className="registr__form-input"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="registr__form-input"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registr__form-btn" type="submit">
          Войти
        </button>
        <p className="loader"></p>
        <p className="registr__form-text">
          Нет аккаунта? <Link to="/register">Регистрация</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
