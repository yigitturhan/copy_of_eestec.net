import React, { useState, useRef, useEffect } from 'react';
import Navigation from './Navigation';

const Partners = () => {
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

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const sliderRef = useRef();
    const sliderIntervalRef = useRef();

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

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.scrollLeft += 2;
            }
        }, 30);

        sliderIntervalRef.current = interval;

        return () => clearInterval(interval);
    }, []);

    const LeftSection = ({ title, children }) => (
        <div className="bg-black rounded-lg shadow-lg p-8 ml-36 mr-auto max-w-3xl">
            <div className="flex items-center gap-8 mb-8">
                <h2 className="text-5xl font-bold text-red-600">{title}</h2>
                <div className="h-[3px] bg-white w-48"></div>
            </div>
            <div className="text-white leading-relaxed text-left text-xl">
                {children}
            </div>
        </div>
    );

    const RightSection = ({ title, children }) => (
        <div className="bg-black rounded-lg shadow-lg p-8 mr-36 ml-auto max-w-3xl">
            <div className="flex items-center gap-8 mb-8 flex-row-reverse">
                <h2 className="text-5xl font-bold text-red-600">{title}</h2>
                <div className="h-[3px] bg-white w-48"></div>
            </div>
            <div className="text-white leading-relaxed text-right text-xl">
                {children}
            </div>
        </div>
    );

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navigation />
            <div className="flex flex-col items-center w-full">
                <div
                    ref={sliderRef}
                    className="w-full bg-[#242424] py-8 overflow-hidden cursor-grab"
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

                <div className="max-w-5xl mx-auto px-6 py-16 text-center">
                    <p className="text-white text-2xl leading-relaxed">
                        Our members are the <span className="font-bold text-red-600">next generation of professionals</span>.
                        With their skills and knowledge, they will commit to achieving the vision and goals
                        of the companies they will work for. Moreover, the members of our Association are
                        open-minded, highly motivated students from top European universities.
                    </p>
                    <p className="text-white text-2xl mt-6 leading-relaxed">
                        Would you like to come in contact with our strong and recognizable network of
                        passionate, skilled, and highly motivated students? Contact us and become our Partner!
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto px-6 space-y-16 pb-16">
                    <LeftSection title="Become our Annual Partner">
                        As our Annual Partner you can establish multifaceted interaction with our
                        audience throughout the year, not only via external channels (e.g., Facebook
                        and Instagram Page), but also through internal ones, such as our internal
                        mailing list. Moreover, this package will give you access to exclusive
                        services like the opportunity to organise webinars in collaboration with us,
                        and to join our Spring and Autumn Congresses, during which you will have a
                        chance to present your company directly to the representatives of our branches,
                        and answer their questions!
                    </LeftSection>

                    <RightSection title="Organize a Webinar with us!">
                        As our Partner, you will have the chance to discuss practices and
                        technologies related to your company's field, and promote your company's
                        mission and opportunities even further.
                    </RightSection>

                    <LeftSection title="Promote your company through our network">
                        If you choose one of our promotional packages, you will have the opportunity
                        to take the best out of our social media and internal communication channels
                        to promote your brand and your initiatives. This will give you the chance of
                        increasing your resonance within a specific target audience, composed of
                        students from all over Europe.
                    </LeftSection>

                    <RightSection title="Get involved in our Projects">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-red-600 mb-4">Soft Skills Academy</h3>
                                <p>
                                    Soft Skills Academy is a project that strives for the development of students in the form of interpersonal skills that are necessary for employment and a successful career, but also for the challenges of modern life that the traditional way of studying cannot provide. Each year it provides hundreds of students in different European with the opportunity to participate in soft skill trainings. Sessions are organised in cooperation with EESTEC trainers, companies and individual professionals, who wish to share their knowledge with students and empower them by giving them the chance to acquire and improve fundamental skills for their careers.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-red-600 mb-4">EESTech Challenge</h3>
                                <p>
                                    EESTech Challenge is our annual competition, in which each year approximately 300 students take part. These students compete in small teams firstly in some of our local committees, a task relevant to the annual topic of the competition. Afterwards, the winners of these Local Rounds gather together to compete in the Final Round organized by one of our branches. Companies involved in the project have the chance to get in touch with young, talented engineers and to share their expertise as mentors or during a presentation or lecture. The topic of the EESTech Challenge is chosen every year to fit the current trends in technology, while being always related to the EECS field (Electrical Engineering Computer Science).
                                </p>
                            </div>
                        </div>
                    </RightSection>

                    <LeftSection title="Donations">
                        Our Association's main purpose is to give our members the tools to best shape their future careers in an incredibly dynamic and evolving society. With this objective clear in our minds, the Electrical Engineering STudents' European assoCiation (EESTEC) organises events to improve both their soft and hard skills. Your donation can help us to cover the expenses related to these events, allow us to fulfill our ambitious goals and improve ourselves in every aspect.
                    </LeftSection>
                </div>
            </div>
        </div>
    );
};

export default Partners;