import React, { useState, useRef, useEffect } from 'react';
import Navigation from './Navigation';

const CountUpNumber = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <div className="text-red-600 text-8xl font-normal">{count.toLocaleString()}</div>;
};

const Stats = () => (
    <div className="flex justify-center space-x-12 my-12">
        {[
            ['5000', 'Members'],
            ['42', 'Universities'],
            ['24', 'Countries']
        ].map(([number, label]) => (
            <div key={label} className="text-center">
                <CountUpNumber end={parseInt(number)} />
                <div className="text-white text-2xl mt-2">{label}</div>
            </div>
        ))}
    </div>
);


const TitleWithLine = ({ title }) => (
    <div className="flex items-center mb-8">
        <h2 className="text-red-600 text-6xl font-bold mr-6">{title}</h2>
        <div className="h-[2px] bg-white w-1/4"></div>
    </div>
);

const HomePage = () => {
    const videoWidth = 860;
    const containerPadding = 16;
    const leftMargin = `calc((100% - ${videoWidth}px) / 2)`;

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef();
    const sliderIntervalRef = useRef();

    const partnerImages = [
        "/partners/best.png",
        "/partners/estiem.png",
        "/partners/eurosender.png",
        "/partners/iaeste.png",
        "/partners/infineon.png",
        "/partners/metafox.png",
        "/partners/swisscare.png",
        "/partners/ifiso.png"
    ];

    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    // Auto scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.scrollLeft += 2;
            }
        }, 30);

        sliderIntervalRef.current = interval;

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow flex flex-col px-4">
                <div className="h-[650px] flex items-center justify-center w-full">
                    <div className="text-left ml-8 w-1/2">
                        <div className="mb-12">
                            <p className="text-white text-4xl mb-0">We are</p>
                            <h1 className="text-red-600 text-[10rem] font-bold my-0">EESTEC</h1>
                            <p className="text-white text-2xl mt-2">
                                Electrical Engineering STudents' European assoCiation
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                        <img
                            src="/worldmap.png"
                            alt="World Map"
                            className="map-image w-full h-[600px] object-contain object-top"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center py-12">
                    <p className="text-7xl font-bold text-center leading-relaxed">
                        <span className="text-red-600">LEARN.</span>{' '}
                        <span className="text-white">TRAVEL.</span>{' '}
                        <span className="text-red-600">MAKE FRIENDS.</span><br/>
                        <span className="text-white">IMPROVE YOURSELF.</span>
                    </p>
                </div>

                <Stats/>

                <div className="flex justify-center my-12">
                    <iframe
                        width="860"
                        height="485"
                        src="https://www.youtube.com/embed/8r3V1sAcRFg"
                        title="EESTEC Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="shadow-lg"
                    />
                </div>

                <section className="my-16" style={{ paddingLeft: leftMargin, paddingRight: containerPadding }}>
                    <div className="max-w-[860px]">
                        <TitleWithLine title="ABOUT US" />
                        <p className="text-white text-xl">
                            Our mission is to spread and strengthen a network of students across Europe.
                            We develop an international collaborative environment to the students,
                            where we can improve ourselves in every aspect. EESTEC experience is unique.
                        </p>
                    </div>
                </section>

                <section className="my-16" style={{paddingLeft: leftMargin, paddingRight: containerPadding}}>
                    <div className="max-w-[860px]">
                        <TitleWithLine title="PROJECTS"/>
                        <div className="flex gap-40">
                            <img
                                src="/projects/project1.png"
                                alt="Project 1"
                                className="w-[415px] h-[300px] object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="/projects/project2.png"
                                alt="Project 2"
                                className="w-[415px] h-[300px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="my-16" style={{paddingLeft: leftMargin, paddingRight: containerPadding}}>
                    <div className="max-w-[860px]">
                        <TitleWithLine title="PARTNERS" />
                        <div
                            ref={sliderRef}
                            className="w-full bg-[#242424] py-8 overflow-hidden cursor-grab rounded-lg"
                            onMouseDown={handleDragStart}
                            onMouseMove={handleDrag}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                        >
                            <div className="flex space-x-8 px-4">
                                {partnerImages.concat(partnerImages).map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Partner ${index + 1}`}
                                        className="h-20 sm:h-24 md:h-28 lg:h-32 w-32 sm:w-40 md:w-48 lg:w-56 object-contain bg-white p-2 rounded-xl"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;