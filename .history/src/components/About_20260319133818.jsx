import './About.css';
import { Link } from 'react-router-dom';
import { content } from '../content/contents';

export default function About() {
    const { about } = content;

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-text-content">
                    <h1 className="about-name">{about.title}</h1>
                    <h3 className="about-location">
                        {about.textOne}
                    </h3>
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

                <div className="about-image-wrapper">
                    <div className="image-frame"></div>

                    <div className="circle-item"></div>
                    <div className="triangle-item">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5L35 32H5L20 5Z" stroke="black" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="lines-item"></div>

                    <img
                        src={`${import.meta.env.BASE_URL}${about.photo}`}
                        alt="Alfonso"
                        className="about-photo"
                    />

                    <div className="photo-label">Alfonso</div>
                </div>
            </div>
        </section>
    );
}