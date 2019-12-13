import * as React from "react";
import {createRef, useLayoutEffect} from "react";

export {
    GraphContainer,
    createFixedHashGenerator,
    createSvg
};

function createFixedHashGenerator() {
    let i = 0, hash = ['198X',
        'Y2K-02', '2002-04', '3.6GPA:',
        'Jun2004', '2004', '2005', '2004-05',
        '2005-07', '2007-08', 'Explore',
        '2009-10', '2010-12', '2009-12'
    ]
    return () => {
        return hash[i++];
    };
}

function GraphContainer(props) {
    const graphContainer = createRef();

    useLayoutEffect(() => {
        if (graphContainer.current) {
            props.children(graphContainer.current);
        }
    });

    return <div ref={graphContainer} />;
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";


function createSvg(options) {
    const svg = document.createElementNS(SVG_NAMESPACE, "svg");
    if (!options) return svg;

    if (options.children) {
        options.children.forEach((child) => svg.appendChild(child));
    }

    if (options.viewBox) {
        svg.setAttribute("viewBox", options.viewBox);
    }

    if (options.height) {
        svg.setAttribute("height", options.height.toString());
    }

    if (options.width) {
        svg.setAttribute("width", options.width.toString());
    }

    return svg;
}

