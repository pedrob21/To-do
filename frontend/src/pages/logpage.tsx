import React from "react";
import "./testelog.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logpage() {

    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    const navigate = useNavigate();

    const handleLogin = () => {
      navigate("/main"); // ou qualquer rota que você quiser
    };

    const handleRegister = () => {
      navigate("/main"); // pode ser outra rota se quiser
    };

  return (
    <div className="tudo"
    style={{
    backgroundImage: 'url("/agenda.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <div className="quadrado">
        <div className="top-buttons">
          <button 
            className={`tab${activeTab === "login" ? " active" : ""}`}
            onClick={() => setActiveTab("login")}
          >Login</button>
          <button 
            className={`tab${activeTab === "register" ? " active" : ""}`}
            onClick={() => setActiveTab("register")}
          >Cadastro</button>
        </div>


    {activeTab === "login" ? (
        <>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="exemplo@email.com"
          name="Email"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="********"
          name="Senha"
        />

        <button onClick={handleLogin}>Entrar</button>
        </>
    ) : (
        <>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="exemplo@email.com"
          name="Email"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="********"
          name="Senha"
        />

        <label htmlFor="senha">Confirme sua senha</label>
        <input
          type="password"
          id="confirmasenha"
          placeholder="********"
          name="confirmasenha"
        />

        <button onClick={handleRegister}>Cadastrar</button>
        </>
    )}
      </div>
    </div>
    );
}


export default Logpage;
