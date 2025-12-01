import React, { useEffect, useState } from "react";
import { getCharacters } from "../../service/characters";
import Header from "../../components/Header/Header";
import { Link } from "react-router";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);

    getCharacters({ name: "" })
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main class="container">
        <section class="hero fade-in">
          <div class="text">
            <h1>
              Погрузись в мир <span>JOJO</span>
            </h1>
            <p>
              Фан-сайт, вдохновлённый эстетикой JoJo's Bizarre Adventure.
              Персонажи, сезоны, манга и многое другое.
            </p>
            <Link class="btn-primary" to="/seasons">
              Начать путешествие
            </Link>
          </div>
          <div class="media">
            <img
              src="https://i0.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/1650/content_k1jekoq.jpg?w=900"
              alt="hero"
            />
          </div>
        </section>

        <section>
          <h2>Быстрый взгляд</h2>
          <div class="cards">
            {characters?.map((character) => (
              <article class="card fade-in">
                <img src={character?.photo_url} alt="" />
                <h3>{character?.name}</h3>
                <p>{character?.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        © Fan-site — неофициально. Все права на JoJo принадлежат авторам.
      </footer>
    </>
  );
};

export default Main;
