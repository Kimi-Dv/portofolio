function Stack() {
    return (
        <div className="stack " id="stack">

            <section className="stack-section d-flex">
                <ul className="stack-section-items">
                    <li className="stack-section-items__list color-effect">Language</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Html</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Css</li>
                    <li className="stack-section-items__list stack-section-items__list--style">JavaScript</li>
                    <li className="stack-section-items__list stack-section-items__list--style">React</li>
                </ul>

                <ul className="stack-section-items">
                    <li className="stack-section-items__list color-effect">Tools</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Figma</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Git</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Firebase</li>
                    <li className="stack-section-items__list stack-section-items__list--style">Trello</li>
                </ul>
            </section>

            <div className="stack-img d-flex">
                <img src="/src/assets/img/stack.png" alt="image-stack" className="m-width" loading="lazy" />
            </div>

        </div>
    );
}

export default Stack;
