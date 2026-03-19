import './Footer.css';
import { content } from '../content/contents';

export default function Footer() {
    const { footer } = content;

    return (
        <footer className="footer">
            <div className="footer-main">
                {/* Левая часть: Контакты */}
                <div className="footer-contacts">
                    <div className="contact-item">
                        <img src={footer.phonePhoto} alt="phone" className="footer-icon-svg" />
                        <a href={`tel:${footer.phone}`}>{footer.phone}</a>
                    </div>
                    <div className="contact-item">
                        <img src={footer.emailPhoto} alt="email" className="footer-icon-svg" />
                        <a href={`mailto:${footer.email}`}>{footer.email}</a>
                    </div>
                </div>

                {/* Центральный разделитель */}
                <div className="footer-divider"></div>

                {/* Правая часть: Динамические соцсети */}
                <div className="footer-socials">
                    {footer.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className="social-circle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${social.image}`}
                                alt={social.name}
                                className="social-img"
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>{footer.copy}</p>
            </div>
        </footer>
    );
}   