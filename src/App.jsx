// CUSTOM CSS and ANIMACION
import './css/styles.css';

// LAYOUT
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// COMPONENTS
import Home from './components/home/Home';
import About from './components/about/About';
import Stack from './components/stack/Stack';
import Project from './components/project/Project';
import Form from './components/form/Form';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Stack />
            <Project />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
