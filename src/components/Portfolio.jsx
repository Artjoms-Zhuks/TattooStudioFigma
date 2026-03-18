import React from 'react';
import './Portfolio.css';
import { content } from '../content/contents';

export default function Portfolio() {
    const { portfolio_tatoo } = content;

    // Группируем проекты по колонкам для удобства верстки
    const styleOne = portfolio_tatoo.projects.filter(p => p.type === "Style one");
    const styleTwo = portfolio_tatoo.projects.filter(p => p.type === "Style two");
    const styleThree = portfolio_tatoo.projects.filter(p => p.type === "Style three");

    return (
        <div className="portfolio-page">
            {/* Верхний блок с прозрачным заголовком */}
            <header className="portfolio-header">
                {/* Контейнер для фонового изображения */}
                <div className="portfolio-bg-image">
                    <img src={portfolio_tatoo.backroundPhoto} alt="Background" />
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

                    {/* Заголовки колонок */}
                    <div className="portfolio-grid-headers">
                        <h3 className="style-label">STYLE ONE</h3>
                        <h3 className="style-label">STYLE TWO</h3>
                        <h3 className="style-label">STYLE THREE</h3>
                    </div>

                    {/* Сетка с проектами */}
                    <div className="portfolio-main-grid">
                        {/* Колонка 1 */}
                        <div className="style-column">
                            {styleOne.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`/${item.image}`} alt={item.type} />
                                </div>
                            ))}
                        </div>

                        {/* Колонка 2 */}
                        <div className="style-column">
                            {styleTwo.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`/${item.image}`} alt={item.type} />
                                </div>
                            ))}
                        </div>

                        {/* Колонка 3 */}
                        <div className="style-column">
                            {styleThree.map(item => (
                                <div key={item.id} className="tatto-card">
                                    <img src={`/${item.image}`} alt={item.type} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}