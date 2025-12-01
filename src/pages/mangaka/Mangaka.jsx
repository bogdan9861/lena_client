import React from "react";
import Header from "../../components/Header/Header";

const Mangaka = () => {
  return (
    <>
      <Header />
      <main class="container fade-in">
        <h1>Мангака</h1>
        <div class="portfolio">
          <div class="photo">
            <img
              src="https://www.film.ru/sites/default/files/people/_tmdb/9qI0gQ3bg3XJvUSykzZ1h0YDUSM.jpg"
              alt="мangaka"
            />
          </div>
          <div class="bio">
            <h2>Хирохико Араки</h2>
            <p>
              Хирохико Араки — японский мангака, создатель JoJo's Bizarre
              Adventure. Его стиль узнаваем по динамичным позам, выразительной
              композиции и необычной эстетике.
            </p>
            <p>
              В этом разделе можно разместить биографию, галерею работ и ссылки
              на интервью.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mangaka;
