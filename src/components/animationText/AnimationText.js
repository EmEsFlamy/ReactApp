import React from 'react';

import './animationText.scss';

const AnimationText = () => {
    return (
        <div className="animationBlock">
            <svg viewBox="0 0 960 300" className="animationBlock-svg">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                       Projekt React 
                    </text>
                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                </g>
            </svg>
        </div>
    );
};

export default AnimationText;