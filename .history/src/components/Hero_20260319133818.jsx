import './Hero.css';
import { Link } from 'react-router-dom';
import { content } from '../content/contents';

export default function Hero() {
    const { hero, portfolio_tatoo } = content;

    return (
        <div className="hero-page-wrheroer">

            <section className="hero-section">
                <div className="hero-bg-text">TATTOO</div>

                <div className="hero-container">
                    <div className="hero-image-box">
                        <div className="diamond-wrheroer">
                            <img src={`${import.meta.env.BASE_URL}${hero.MaskGroup}`} alt="Tattoo style" className="hero-img" />
                        </div>
                        <img src={"/crown-decor.svg"} alt="" className="hero-decor" />
                    </div>

                    <div className="hero-content">
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

            <section className="styles-section">
                <img src={`${import.meta.env.BASE_URL}${hero.dopePhoto}`} alt="Dope" className="dope-sticker" />

                <div className="styles-container">
                    <div className="styles-text">
                        <h2 className="styles-title">{hero.textTwo}</h2>
                        <p className="styles-description">{hero.textThree}</p>
                        <Link to="/design" className="btn-pill white">
                            {portfolio_tatoo.text}
                        </Link>
                    </div>

                    <div className="styles-visual">
                        <img src={`${import.meta.env.BASE_URL}${hero.genersPhoto}`} alt="Tattoo Styles Composition" className="geners-svg" />
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
                            <img src={`${import.meta.env.BASE_URL}${hero.groupPhoto}`} alt="Tattoo process" />
                        </div>
                    </div>

                    <div className="culture-image-main-container">
                        <img
                            className="culture-image-main"
                            src={`${import.meta.env.BASE_URL}${hero.manTattoArms}`}
                            alt="Tattoo Art Composition"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}