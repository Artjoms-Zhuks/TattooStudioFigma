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
                    {/* Черная рамка */}
                    <div className="image-frame"></div>

                    {/* Геометрические фигуры (ручная отрисовка через CSS) */}
                    <div className="shape circle-item"></div>
                    <div className="shape triangle-item"></div>
                    <div className="shape lines-item"></div>

                    {/* Фотография (должна быть PNG с прозрачным фоном) */}
                    <img src={about.photo} alt="Alfonso" className="about-photo" />

                    {/* Текст Alfonso с тенью */}
                    <div className="photo-label">Alfonso</div>
                </div>
            </div>
        </section>
    );
}