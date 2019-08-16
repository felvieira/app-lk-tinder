import React from "react";

import logo from "../assets/logo.svg";

import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form onSubmit>
        <img src={logo} alt="Tindev" />
        <input placeholder="Digite seu usuário no Github" value onChange />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
