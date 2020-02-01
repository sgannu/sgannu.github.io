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
        commits: [
            "Father, runner, love teaching, mentoring and recreational sports (biking, volleyball, ping-pong etc)",
            "Curious, risk taking & open to sharing (more I share the more I gain), love open-source.",
            "Product/framework oriented design, customer centric and deliver value all the time.",
            "Pursuing horizon for providing the best solutions with passion for technology & innovation."
        ],
        info: "sgannu.e@gmail.com, https://www.linkedin.com/in/srinivasgannu, 989.383.0030, Dallas, TX.",
        merge: "Ready for next challenge!!!"
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
            commits: ["Algorithms, data-structures, OS, Security, Android.",
                "Android kernel api & app for monitoring and optimizing resources."]
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
                "Invented a custom production data management tool (cascaded relational DB queries).",
                "C, C++, Java & web technologies, Multi threading, web services, PL/SQL etc.",
                "Stressful production rollouts. Debug, fix and hot-patches on the spot.",
                "Custom tools, scripting, large files processing, Reusable modules/libraries, apis."
            ]
        }, {
            branch: "Statefarm.",
            tag: "2012 - Senior Consultant Technical Lead",
            merge: "Had fun taking up challenges and build successful team.",
            commits: ["Technical architecture, fullStack development, experimenting on JS & jQuery, big data, Spring and other java libraries.",
                "Think big - Dynamic Data Driven UI to migrate IBM lotus notes apps. jQuery modules. Vertical DB structure.",
                "CI/CD pipeline on Jenkins, automating version control and releases. Enterprise hard-controls automation.",
                "Extended production data management tool (cascaded relational DB queries).",
                "Encourage reusability, clean code, SOLID and GRASP principles, design patterns.",
                "Leadership qualities, product thinking, Delivery challenges."
            ]
        }, {
            branch: "American Airlines.",
            tag: "Currently - Principal Consultant Technical Lead",
            merge: "Work life balance/integration.",
            commits: ["Technical architecture on and off cloud, fullStack + devops, cloud technologies, Kubernetes, Docker, Angular vs react.",
                "Think big - reusability across enterprise through inner-source.",
                "Automation every where. Saved several hours for QA and developers through simple solutions.",
                "Built customized chrome extensions for forms data, A11Y validation framework, nodejs lib for IBM cloud deployment scripts.",
                "Design thinking, Agile principles, From complex design patterns to simple, SOLID and GRASP code.",
                "Focus on team success than personal. Ownership, mentoring, training and technical/behavioral screening."
            ]
        }]
};