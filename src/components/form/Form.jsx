function Form() {
    return (
        <div className="form d-flex " id="form">
            <section className="form-logo d-flex">
                <img src="/public/logo.svg" alt="logo-page" loading="lazy" className="form-logo__img" />
                <p className="form-logo__text">Hi, Are you interested in working together?</p>
            </section>
            <section className="form-contact form-contact-box">
                <div className="form-contact-flex form-contact-email">
                    <div className="form-contact-cicle form-contact-email-box">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <span className="form-contact-email__text">cristianjosue0910@gmail.com</span>
                </div>
                <div className="form-contact-flex form-contact-discord">
                    <div className="form-contact-cicle form-contact-dicord-box">
                        <i className="fa-brands fa-discord"></i>
                    </div>
                    <span className="form-contact-discord__text">Kimi#0309</span>
                </div>
            </section>
        </div>
    );
}

export default Form;
