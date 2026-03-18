import './Hero.css';
import { Link } from 'react-router-dom'; // Добавляем этот импорт
import { content } from '../content/contents';

export default function Hero() {
    // Внимательно смотрим на пути в content.js
    const { hero, portfolio_tatoo } = content;

    return (
        /* Обязательно оборачиваем всё в один div или <> Fragment */
        <div className="hero-page-wrheroer">

            {/* БЛОК 1: Главный экран (Белый) */}
            <section className="hero-section">
                <div className="hero-bg-text">TATTOO</div>

                <div className="hero-container">
                    <div className="hero-image-box">
                        <div className="diamond-wrheroer">
                            {/* Убедись, что в public есть hero-man.png */}
                            <img src={hero.MaskGroup} alt="Tattoo style" className="hero-img" />
                        </div>
                        {/* Картинка короны (красная) */}
                        <img src={"/crown-decor.svg"} alt="" className="hero-decor" />
                    </div>

                    <div className="hero-content">
                        {/* Данные берем из content.hero как в твоем файле */}
                        <h2 className="hero-subtitle">{hero.welcome}</h2>
                        <p className="hero-description">{hero.textOne}</p>

                        <Link to="/contact" className="btn-pill">
                            {hero.buttonText}
                        </Link>
                    </div>
                </div>

                <div className="hero-side-label">
                    <p>FAEZ</p>
                    <div className="arrow-down">↓</div>
                </div>
            </section>

            {/* БЛОК 2: Styles (Черный) */}
            <section className="styles-section">
                {/* Картинка DOPE на стыке блоков */}
                <img src={hero.dopePhoto} alt="Dope" className="dope-sticker" />

                <div className="styles-container">
                    <div className="styles-text">
                        <h2 className="styles-title">{hero.textTwo}</h2>
                        <p className="styles-description">{hero.textThree}</p>
                        <Link to="/design" className="btn-pill white">
                            {portfolio_tatoo.text}
                        </Link>
                    </div>

                    <div className="styles-visual">
                        {/* Используем один SVG файл для всей композиции стилей */}
                        <img src={hero.genersPhoto} alt="Tattoo Styles Composition" className="geners-svg" />
                    </div>
                </div>

                <div className="arrow-down-red">↓</div>
            </section>

            <section className="culture-section">
                <div className="culture-container">
                    <div className="culture-text">
                        <h2 className="culture-title">{hero.textFour}</h2>
                        <p className="culture-description">{hero.textFive}</p>
                        <div className="culture-image-small">
                            {/* Круглая фотка процесса слева */}
                            <img src={hero.groupPhoto} alt="Tattoo process" />
                        </div>
                    </div>

                    <div className="culture-image-main-container">
                        {/* Основное фото справа (вместо видео) */}
                        <img
                            className="culture-image-main"
                            src={hero.manTattoArms}// Убедись, что файл есть в public
                            alt="Tattoo Art Composition"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}