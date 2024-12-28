import EuropeMap from './EuropeMap';
import Navigation from './Navigation';

const Cities = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow flex flex-col px-4">
                <EuropeMap />
            </main>
        </div>
    );
};

export default Cities;