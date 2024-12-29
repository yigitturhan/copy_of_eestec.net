import React, { useEffect, useState } from 'react';

const EuropeMap = () => {
    const [svgContent, setSvgContent] = useState('');
    const [tooltipContent, setTooltipContent] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handlePathHover = (event) => {
            if (event.detail) {
                setTooltipContent(`Region ${event.detail.pathData.substring(0, 20)}...`);
                setShowTooltip(true);
                setMousePosition({
                    x: event.detail.clientX,
                    y: event.detail.clientY
                });
            }
        };

        const handlePathMove = (event) => {
            if (event.detail) {
                setMousePosition({
                    x: event.detail.clientX,
                    y: event.detail.clientY
                });
            }
        };

        const handlePathLeave = () => {
            setShowTooltip(false);
        };

        fetch('/countries.html')
            .then((response) => response.text())
            .then((data) => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                const paths = tempDiv.getElementsByClassName('rsm-geography');
                Array.from(paths).forEach(path => {
                    const pathData = path.getAttribute('d');
                    path.setAttribute('onmouseenter', `
            this.dispatchEvent(new CustomEvent("pathHover", {
              detail: { 
                pathData: "${pathData}",
                clientX: event.clientX,
                clientY: event.clientY
              },
              bubbles: true
            }))
          `);
                    path.setAttribute('onmouseleave', 'this.dispatchEvent(new CustomEvent("pathLeave", {bubbles: true}))');
                    path.setAttribute('onmousemove', `
            this.dispatchEvent(new CustomEvent("pathMove", {
              detail: { 
                pathData: "${pathData}",
                clientX: event.clientX,
                clientY: event.clientY
              },
              bubbles: true
            }))
          `);
                });

                setSvgContent(tempDiv.innerHTML);

                document.addEventListener('pathHover', handlePathHover);
                document.addEventListener('pathLeave', handlePathLeave);
                document.addEventListener('pathMove', handlePathMove);
            })
            .catch((error) => console.error('Error loading SVG:', error));

        return () => {
            document.removeEventListener('pathHover', handlePathHover);
            document.removeEventListener('pathLeave', handlePathLeave);
            document.removeEventListener('pathMove', handlePathMove);
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <div
                dangerouslySetInnerHTML={{
                    __html: svgContent,
                }}
            />
            {showTooltip && (
                <div
                    className="map-tooltip"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                    }}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
};

export default EuropeMap;