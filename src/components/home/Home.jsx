function Home() {
    return (
        <div className="home d-flex " id="home">
            <div className="home-text">
                <h1 className="home-text__title color-effect">Hi, I'm Cristian J.</h1>
                <p className="home-text__paragrah">
                    <span className="color-effect">Front-end</span> developer passionate about the world of technology, <span className="color-effect">languages</span>, and <span className="color-effect">graphic design</span>
                </p>
            </div>
            <div className="home-image">
                <img className="m-width" src="/svg/main.svg" alt="main-image" loading="lazy" />
            </div>
        </div>
    );
}

export default Home;
