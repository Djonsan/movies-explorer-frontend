import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container content__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__block">
          <img src={photo} alt="Моя фотография" className="about-me__img" />
          <div className="about-me__info">
            <div className="about-me__info-block">
              <h3 className="about-me__name">Виталий</h3>
              <p className="about-me__profession">
              Фронтенд-разработчик, 30 лет
              </p>
              <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a
              href="https://github.com/Djonsan"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
