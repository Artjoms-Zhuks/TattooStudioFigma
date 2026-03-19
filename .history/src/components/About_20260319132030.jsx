import './About.css';
import { Link } from 'react-router-dom'; // Добавляем этот импорт
import { content } from '../content/contents';

export default function About() {
    const { about } = content;

    return (
        <section className="about-section">
            <div className="about-container">
                {/* Левая часть: Текст */}
                <div className="about-text-content">
                    <h1 className="about-name">{about.title}</h1>
                    <h3 className="about-location">
                        {about.textOne}
                    </h3>
                    <p className="about-description">
                        {about.textTwo}
                    </p>
                    <div className="about-buttons">
                        {/*<button className="btn-black">{about.buttonContact}</button>*/}
                        <Link to="/contact" className="btn-black">
                            {about.buttonContact}
                        </Link>
                        {/*<button className="btn-outline">{about.buttonDesign}</button>*/}
                        <Link to="/design" className="btn-outline">
                            {about.buttonDesign}
                        </Link>
                    </div>
                </div>

                {/* Правая часть: Фото с декором */}
                {/* Правая часть: Сложная композиция */}
                <div className="about-image-wrapper">
                    {/* Рамка */}
                    <div className="image-frame"></div>

                    {/* Декор */}
                    <div className="circle-item"></div>
                    <div className="triangle-item">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5L35 32H5L20 5Z" stroke="black" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="lines-item"></div>

                    {/* Фото */}
                    <img
                        src={`${import.meta.env.BASE_URL}${about.photo}`}
                        alt="Alfonso"
                        className="about-photo"
                    />

                    {/* Имя */}
                    <div className="photo-label">Alfonso</div>
                </div>
            </div>
        </section>
    );
}