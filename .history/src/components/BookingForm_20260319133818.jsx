import React from 'react';
import './BookingForm.css';
import { content } from '../content/contents';

export default function BookingForm() {
    const { footer } = content;

    return (
        <div className="booking-page">
            <section className="booking-section">
                <div className="booking-container">

                    <div className="form-wrapper">
                        <div className="form-frame">
                            <form className="contact-form">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <label>Phone No</label>
                                    <input type="text" placeholder="Phone No" />
                                </div>
                                <div className="input-group message-group">
                                    <label>Message</label>
                                    <textarea placeholder="Message" rows="8"></textarea>
                                </div>
                                <div className="btn-container">
                                    <button type="submit" className="btn-send">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="socials-wrapper">
                        {footer.socials.map((social, index) => {
                            const isReverse = index % 2 !== 0;

                            return (
                                <div key={index} className={`social-item ${isReverse ? 'reverse' : ''}`}>
                                    <div className="social-icon">
                                        <img src={`${import.meta.env.BASE_URL}${social.image}`} alt={social.name} />
                                    </div>

                                    <span className="line long"></span>

                                    <a
                                        href={social.link}
                                        className={`social-link ${social.name.toLowerCase()}`}
                                    >
                                        {social.name}.Com/Example
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="side-footer-labels">
                    <div className="side-label">{footer.phone}</div>
                    <div className="side-label">{footer.email}</div>
                </div>
            </section>
        </div>
    );
}