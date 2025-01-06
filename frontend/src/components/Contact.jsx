import React from 'react';
import Navigation from "./Navigation.jsx";


const BoardMember = ({ image, name, role }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-64 h-80 group cursor-pointer">
            <img
                src={image}
                alt={name}
                className="w-full h-full rounded-t-xl rounded-b-xl object-cover transition-all duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-red-600 text-white px-6 py-2 rounded-full">
                    Read More
                </button>
            </div>
            <div className="absolute bottom-0 w-full bg-[#242424] py-3 px-4 rounded-b-xl">
                <p className="text-white-600 text-sm font-medium text-center mb-1">{role}</p>
                <h3 className="text-white text-xl font-bold text-center">{name}</h3>
            </div>
        </div>
    </div>
);

const Contact = () => {
    const boardMembers = [
        { image: "/board/member1.png", name: "Kostis Ntozis", role: "Chairperson" },
        { image: "/board/member2.jpg", name: "Michael Heider", role: "Treasurer" },
        { image: "/board/member3.png", name: "Giulio Margola", role: "Vice Chairperson for External Affairs" },
        { image: "/board/member4.jpg", name: "Anthi Gavriilidou", role: "Vice Chairperson for Internal Affairs" },
        { image: "/board/member5.jpg", name: "Nasia Voulgareli", role: "Vice Chairperson for Administrative Affairs" }
    ];

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navigation/>
            <main className="flex-grow flex flex-col px-4">
                <section className="my-16" style={{paddingLeft: 'calc((100% - 1100px) / 2)', paddingRight: '16px'}}>
                    <div className="max-w-[1100px]">
                        <div className="flex items-center mb-8">
                            <h2 className="text-red-600 text-6xl font-bold mr-6">THE BOARD</h2>
                            <div className="h-[2px] bg-white w-1/4"></div>
                        </div>

                        <div className="flex flex-col items-center gap-12 mb-16">
                            <div className="grid grid-cols-3 gap-12">
                                {boardMembers.slice(0, 3).map((member, index) => (
                                    <BoardMember key={index} {...member} />
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-12">
                                {boardMembers.slice(3, 5).map((member, index) => (
                                    <BoardMember key={index} {...member} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center mb-8">
                            <h2 className="text-red-600 text-6xl font-bold mr-6">CONTACT</h2>
                            <div className="h-[2px] bg-white w-1/4"></div>
                        </div>

                        <div className="bg-[#242424] rounded-xl p-8 text-white">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <p>Interested in becoming a member of EESTEC or founding an Observer?</p>
                                        <p>Or maybe you would like to contact us regarding a partnership?</p>
                                        <p>Would you like to learn more about our privacy policy?</p>
                                        <p>Send us an email at: board[at]eestec[dot]net</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Postal Address</h3>
                                    <div className="space-y-2">
                                        <p>EESTEC</p>
                                        <p>Electrical Engineering STudents' European assoCiation</p>
                                        <p>EESTEC c/o AMIV an der ETH CAB E37,</p>
                                        <p>Universitätstrasse 6, 8092 Zürich, Switzerland</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Email</h3>
                                    <a href="mailto:board@eestec.net"
                                       className="text-red-600 hover:text-red-500 transition-colors">
                                        board@eestec.net
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
