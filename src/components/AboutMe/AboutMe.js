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
              <h3 className="about-me__name">Евгений</h3>
              <p className="about-me__profession">
                Фронтенд-разработчик, 32 года
              </p>
              <p className="about-me__description">
              Я родился и живу в Хабаровске, закончил факультет Экономика, 
              Финансы и кредит (экономист) университета МФПУ "Синергия". 
              Решил сменить профессию и попробовать свои силы в веб-разработке. 
              Результатом моего обучения является данный дипломный проект.
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
