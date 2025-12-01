import React, { useEffect, useState } from "react";
import { getCharacters } from "../../service/characters";
import Header from "../../components/Header/Header";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [character, setCharacter] = useState(null);

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
        <h1>Персонажи</h1>
        <div class="cards">
          {characters?.map((character) => (
            <article
              class="card fade-in"
              onClick={() => {
                setModalOpen(true);
                setCharacter(character);
              }}
            >
              <img src={character?.photo_url} alt="" />
              <h3>{character?.name}</h3>
              <p>{character?.description}</p>
            </article>
          ))}
        </div>
      </main>

      <div
        id="modal"
        class="modal"
        style={{ display: modalOpen ? "flex" : "none" }}
      >
        <div class="modal-content">
          <img class="modal-photo" src={character?.photo_url} />
          <span id="modal-close" onClick={() => setModalOpen(false)}>
            &times;
          </span>
          <h2 id="modal-title">{character?.name}</h2>
          <p id="modal-text">{character?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Characters;
