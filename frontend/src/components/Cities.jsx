import React from 'react';
import EuropeMap from './EuropeMap';
import Navigation from './Navigation';
import {cities} from "./city_list.jsx";
const Cities = () => {


    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow flex flex-col px-4">
                <EuropeMap />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {cities.map((city) => (
                        <div key={city.name} className="relative group">
                            <div className="relative overflow-hidden rounded-lg aspect-video">
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-white text-xl font-bold group-hover:text-2xl transition-all duration-300">
                                            {city.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {city.committee}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Cities;