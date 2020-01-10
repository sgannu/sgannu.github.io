import * as React from "react";
import {createRef, useLayoutEffect} from "react";

export {
    GraphContainer,
    createFixedHashGenerator,
    createSvg,
    content
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

const content = {
    master: {
        branch: "Srinivas Gannu",
        commit: "Pursuing horizon for providing the best solutions with passion for technology & innovation.",
        merge: "sgannu.e@gmail.com, 989.383.0030, Dallas, TX."
    },
    edu: [
        {
            branch: "Computer Science",
            tag: "2004 - Bachelor Degree",
            merge: "Graduated in distinction",
            commits: ["Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc.",
                "Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)."
            ]
        },
        {
            branch: "System Programming",
            tag: "2010 - UIUC, Champaign, IL",
            merge: "Certification",
            commits: ["Algorithms, datastructures, OS, Security, Andrioid.",
                "Andriod kernel api & app for monitoring and optimizing resources."]
        }],
    work: [
        {
            branch: "Alcatel India Ltd",
            tag: "2005 - R&D Associate Developer",
            merge: "Learnt few french words: Bonjour, c'est mon premier boulot.",
            commits: ["Extreme & Dynamic programming in C, C++. Experimental and fun driven development.",
                "Built an application layer for CAMEL protocol for SS7 stack on TCP."]
        },
        {
            branch: "Amdocs Inc.",
            tag: "2009 - Sr. Subject Matter Expert",
            merge: "Experienced Europe & US culture, enjoyed traveling, ping-pong & food.",
            commits: ["Extreme & Dynamic programming, linux kernel, IPC/socket programming, multi threading, shared memory etc.",
                "From C, C++ to Java & web technologies, Multi threading, web services, unit testing etc.",
                "Front end applications, desktop tools, automate tedious tasks, pl/sql.",
                "Shortcuts, custom tools, scripting, Reusable modules/libraries, apis."
            ]
        }, {
            branch: "Statefarm.",
            tag: "2012 - Senior Consultant Technical Lead",
            merge: "Had fun taking up challenges and build successful team.",
            commits: ["Technical architecture, fullStack development, experimenting on JS & JQuery, big data, Spring and other java libraries.",
                "CI/CD pipeline on jenkins, automating version control and releases.",
                "Encourage reusability, clean code, solid principles, design patterns.",
                "Leadership qualities, product thinking, Delivery challenges."
            ]
        }, {
            branch: "American Airlines.",
            tag: "Currently - Principal Consultant Technical Lead",
            merge: "Work life balance/integration. Volleyball & still love ping-pong.",
            commits: ["Technical architecture on and off cloud, fullStack + devops, cloud technologies, Kubernetes, Docker, Angular vs react.",
                "Design thinking, Agile principles, From complex design patterns to simple and SOLID code.",
                "Focus on team success than personal. Ownership, mentoring, traning."
            ]
        }]
};