import React from "react";
import { Link, useNavigate } from "react-router";
import useUser from "../../hook/useUser";

const Header = () => {
  const navigate = useNavigate();

  const { user } = useUser();

  return (
    <header>
      <Link class="logo" to="/">
        JOJO B-A
      </Link>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/characters">Персонажи</Link>
        <Link to="/mangaka">Мангака</Link>
        <Link to="/seasons">Сезоны</Link>
        <Link to="/about">Что нужно знать?</Link>

        {user ? (
          <Link to={"/profile"} style={{ textDecoration: "underline" }}>
            {user?.name}
          </Link>
        ) : (
          <>
            <button class="auth" onClick={() => navigate("/login")}>
              Вход
            </button>
            <button class="auth" onClick={() => navigate("register")}>
              Регистрация
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
