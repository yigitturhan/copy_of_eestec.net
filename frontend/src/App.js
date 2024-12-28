import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const Navigation = () => (
        <nav className="bg-black p-4">
            <ul className="flex justify-center space-x-6">
                <li><Link to="/" className="text-white hover:text-red-600">Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-red-600">About Us</Link></li>
                <li><Link to="/cities" className="text-white hover:text-red-600">Cities</Link></li>
                <li><Link to="/events" className="text-white hover:text-red-600">Events</Link></li>
                <li><Link to="/partners" className="text-white hover:text-red-600">Partners</Link></li>
                <li><Link to="/contact" className="text-white hover:text-red-600">Contact</Link></li>
            </ul>
        </nav>
    );

    const Home = () => (
        <div className="bg-black min-h-screen">
            <main className="container mx-auto px-4 py-12 text-center">
                <div className="mb-12">
                    <p className="text-white text-2xl">We are</p>
                    <h1 className="text-red-600 text-6xl font-bold my-4">EESTEC</h1>
                    <p className="text-white text-lg">Electrical Engineering STudents' European assoCiation</p>
                </div>

                <div className="mb-12">
                    <p className="text-white text-3xl font-bold">
                        LEARN. TRAVEL. MAKE FRIENDS.<br />
                        IMPROVE YOURSELF.
                    </p>
                </div>

                <div className="flex justify-center space-x-12 my-8">
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold">5,000</div>
                        <div className="text-white text-xl">Members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold">42</div>
                        <div className="text-white text-xl">Universities</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white text-4xl font-bold">24</div>
                        <div className="text-white text-xl">Countries</div>
                    </div>
                </div>

                <div className="my-8">
                    <iframe
                        className="mx-auto w-full max-w-3xl aspect-video"
                        src="https://www.youtube.com/embed/8r3V1sAcRFg"
                        title="EESTEC Video"
                        allowFullScreen
                    />
                </div>

                <section className="my-12">
                    <h2 className="text-red-600 text-4xl font-bold mb-6">About Us</h2>
                    <p className="text-white text-xl max-w-3xl mx-auto">
                        Our mission is to spread and strengthen a network of students across Europe.
                        We develop an international collaborative environment to the students,
                        where we can improve ourselves in every aspect. EESTEC experience is unique.
                    </p>
                </section>

                <section className="my-12">
                    <h2 className="text-red-600 text-4xl font-bold mb-6">Partners</h2>
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-4 rounded">
                                <img
                                    src={`/placeholder-${i}.png`}
                                    alt={`Partner ${i}`}
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );

    // Placeholder components for other routes
    const About = () => <div className="text-white">About Page</div>;
    const Cities = () => <div className="text-white">Cities Page</div>;
    const Events = () => <div className="text-white">Events Page</div>;
    const Partners = () => <div className="text-white">Partners Page</div>;
    const Contact = () => <div className="text-white">Contact Page</div>;

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/events" element={<Events />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;