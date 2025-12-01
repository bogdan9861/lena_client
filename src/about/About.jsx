import React from "react";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <>
      <Header />

      <main class="container faq fade-in">
        <h1>Что нужно знать о JoJo?</h1>

        <div class="qa-hover">
          <div class="qa-q">Что такое стенд?</div>
          <div class="qa-a">
            Стенд — это физическое воплощение духовной энергии персонажа.
          </div>
        </div>

        <div class="qa-hover">
          <div class="qa-q">Кто главный герой?</div>
          <div class="qa-a">
            В каждой части свой главный герой из семьи Джостар.
          </div>
        </div>

        <div class="qa-hover">
          <div class="qa-q">Сколько частей у JOJO?</div>
          <div class="qa-a">
            На данный момент существует 8 частей, каждая со своей историей.
          </div>
        </div>

        <div class="qa-hover">
          <div class="qa-q">Почему такие странные позы?</div>
          <div class="qa-a">
            Это часть уникального художественного стиля и способ показать силу.
          </div>
        </div>

        <div class="qa-hover">
          <div class="qa-q">Где смотреть JOJO?</div>
          <div class="qa-a">
            На официальных стриминговых платформах и сайтах.
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
