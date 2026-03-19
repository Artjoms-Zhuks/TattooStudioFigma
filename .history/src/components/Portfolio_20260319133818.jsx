import React from 'react';
import './Portfolio.css';
import { content } from '../content/contents';

export default function Portfolio() {
    const { portfolio_tatoo } = content;

    const styleOne = portfolio_tatoo.projects.filter(p => p.type === "Style one");
    const styleTwo = portfolio_tatoo.projects.filter(p => p.type === "Style two");
    const styleThree = portfolio_tatoo.projects.filter(p => p.type === "Style three");

    return (
        <div className="portfolio-page">
            <header className="portfolio-header">
                <div className="portfolio-bg-image">
                    <img src={`${import.meta.env.BASE_URL}${portfolio_tatoo.backroundPhoto}`} alt="Background" />
                </div>
                <div className="header-overlay">
                    <h1 className="portfolio-main-title">
                        {portfolio_tatoo.text}
                    </h1>
                </div>
                <div className="scroll-indicator">
                    <span></span>
                    <p>SCROLL</p>
                    <span></span>
                </div>
            </header>

            <section className="portfolio-content">
                <div className="portfolio-container">

                    <div className="portfolio-grid-headers">
                        <h3 className="style-label">STYLE ONE</h3>
                        <h3 className="style-label">STYLE TWO</h3>
                        <h3 className="style-label">STYLE THREE</h3>
                    </div>

                    <div className="portfolio-main-grid">
                        <div className="style-column">
                            <h3 className="mobile-style-label">STYLE ONE</h3>
                            {styleOne.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`${import.meta.env.BASE_URL}${item.image}`} alt="Tattoo" />
                                </div>
                            ))}
                        </div>

                        <div className="style-column">
                            <h3 className="mobile-style-label">STYLE TWO</h3>
                            {styleTwo.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`${import.meta.env.BASE_URL}${item.image}`} alt="Tattoo" />
                                </div>
                            ))}
                        </div>

                        <div className="style-column">
                            <h3 className="mobile-style-label">STYLE THREE</h3>
                            {styleThree.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`${import.meta.env.BASE_URL}${item.image}`} alt="Tattoo" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}