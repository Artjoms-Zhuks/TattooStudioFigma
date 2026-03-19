import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { content } from '../content/contents';

export default function About() {
    const { about } = content;

    return (
        <section className="about-section">
            <div className="about-container">
                {/* Левая часть: Контент */}
                <div className="about-text-content">
                    <h1 className="about-name">{about.title}</h1>
                    <h3 className="about-location">{about.textOne}</h3>
                    <p className="about-description">
                        {about.textTwo}
                    </p>
                    <div className="about-buttons">
                        <Link to="/contact" className="btn-black">
                            {about.buttonContact}
                        </Link>
                        <Link to="/design" className="btn-outline">
                            {about.buttonDesign}
                        </Link>
                    </div>
                </div>

                {/* Правая часть: Масштабная композиция */}
                <div className="about-image-wrapper">
                    {/* Геометрический декор */}
                    <div className="shape circle-item"></div>

                    <div className="shape triangle-item">
                        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5L45 40H5L25 5Z" stroke="black" strokeWidth="1.5" />
                        </svg>
                    </div>

                    <div className="shape lines-item"></div>

                    {/* Рамка (основа) */}
                    <div className="image-frame"></div>

                    {/* Фотография артиста */}
                    <img
                        src={`${import.meta.env.BASE_URL}${about.photo}`}
                        alt="Alfonso Tattoo Artist"
                        className="about-photo"
                    />

                    {/* Фоновое имя */}
                    <div className="photo-label">Alfonso</div>
                </div>
            </div>
        </section>
    );
}