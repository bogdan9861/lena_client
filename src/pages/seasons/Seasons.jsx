import React from "react";
import Header from "../../components/Header/Header";

const Seasons = () => {
  return (
    <>
      <Header />

      <main class="container">
        <h1>Сезоны и части</h1>
        <div class="season-grid">
          <div class="season">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/aa/JoJo_Part_1_Phantom_Blood.jpg"
              alt="phb"
            />
            <div class="info">
              <h3>Phantom Blood</h3>
              <p>Начальная часть истории Джостаров.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-1-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/30/Jojo8.jpg"
              alt="bt"
            />
            <div class="info">
              <h3>Battle Tendency</h3>
              <p>Приключения с невероятными противниками.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-2-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://imageservice.disco.peacocktv.com/uuid/a74c56b4-10b2-3a46-bed5-d1ab9630bf13/TITLE_ART_16_9?language=eng&territory=US&proposition=NBCUOTT&version=2a00558f-a2c2-30e3-b098-7e533ed928dc"
              alt="sc"
            />
            <div class="info">
              <h3>Stardust Crusaders</h3>
              <p>Классическая часть со Стендами.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-3-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b6/Jojo36.jpg"
              alt="diu"
            />
            <div class="info">
              <h3>Diamond is Unbreakable</h3>
              <p>Малый город, множество тайн.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-4-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/66/JoJo_Part_5_Golden_Wind.jpg"
              alt="gw"
            />
            <div class="info">
              <h3>Golden Wind</h3>
              <p>Итальянская мафия и судьбы героев.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-5-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3d/JoJo_Part_6_Stone_Ocean.jpg"
              alt="so"
            />
            <div class="info">
              <h3>Stone Ocean</h3>
              <p>Новая глава истории семьи Джостар.</p>
              <a
                class="watch-btn"
                href="https://jojo-no-kimyou-jut.su/seasons-6-episode-1"
              >
                Смотреть
              </a>
            </div>
          </div>
          <div class="season">
            <img
              src="https://steel-ball-run.com/wp-content/uploads/2020/03/Steel-Ball-Run-Volume-1.jpg"
              alt="sbr"
            />
            <div class="info">
              <h3>Steel Ball Run</h3>
              <p>Резкая смена тона и новый вселенский сюжет.</p>
              <a
                class="watch-btn"
                href="https://www.crunchyroll.com/series/GYE5K3GGR/jojos-bizarre-adventure"
              >
                Смотреть
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Seasons;
