import React, { useEffect, useState } from 'react';
import '../index.css';

const EuropeMap = () => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch('/countries.html')
            .then((response) => response.text())
            .then((data) => setSvgContent(data))
            .catch((error) => console.error('Error loading SVG:', error));
    }, []);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: svgContent,
                }}
            />
        </div>
    );
};

export default EuropeMap;
