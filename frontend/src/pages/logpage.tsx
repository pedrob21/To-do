import React from "react";
import "./testelog.css";
import { useState } from "react";

function Logpage() {

    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

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

        <button>Entrar</button>
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

        <button>Cadastrar</button>
        </>
    )}
      </div>
    </div>
    );
}


export default Logpage;
