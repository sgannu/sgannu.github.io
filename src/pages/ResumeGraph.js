import React from 'react';
import {Gitgraph, templateExtend, TemplateName} from '@gitgraph/react';
import {content} from './helpers';

export function ResumeGraphComponent() {
    const withoutAuthor = templateExtend(TemplateName.Metro, {
        commit: {
            message: {
                displayAuthor: false,
                displayHash: false
            },
        },
    });

    const renderDot = (commit) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71.84 75.33"
            height="30"
            width="30"
        >
            <g fill={commit.style.dot.color} stroke="white" strokeWidth="2">
                <path d="M68.91,35.38c4.08-1.15,3.81-3-.22-3.75-3.1-.7-18.24-5.75-20.71-6.74-2.15-1-4.67-.12-1,3.4,4,3.53,1.36,8.13,2.79,13.47C50.6,44.89,52.06,49,56,55.62c2.09,3.48,1.39,6.58-1.42,6.82-1.25.28-3.39-1.33-3.33-3.82h0L44.68,43.79c1.79-1.1,2.68-3,2-4.65s-2.5-2.29-4.46-1.93l-1.92-4.36a3.79,3.79,0,0,0,1.59-4.34c-.62-1.53-2.44-2.27-4.37-2L36,22.91c1.65-1.12,2.46-3,1.83-4.52a3.85,3.85,0,0,0-4.37-1.95c-.76-1.68-2.95-6.89-4.89-10.73C26.45,1.3,20.61-2,16.47,1.36c-5.09,4.24-1.46,9-6.86,12.92l2.05,5.35a18.58,18.58,0,0,0,2.54-2.12c1.93-2.14,3.28-6.46,3.28-6.46s1-4,2.2-.57c1.48,3.15,16.59,47.14,16.59,47.14a1,1,0,0,0,0,.11c.37,1.48,5.13,19,19.78,17.52,4.38-.52,6-1.1,9.14-3.83,3.49-2.71,5.75-6.08,5.91-12.62.12-4.67-6.22-12.62-5.81-17S66.71,36,68.91,35.38Z" />
                <path d="M2.25,14.53A28.46,28.46,0,0,1,0,17.28s3,4.75,9.58,3a47.72,47.72,0,0,0-1.43-5A10.94,10.94,0,0,1,2.25,14.53Z" />
            </g>
        </svg>
    );

    const renderLabel = (branch) => {
        return (
            <text
                alignmentBaseline="middle"
                dominantBaseline="middle"
                fill={branch.style.label.color}
                style={{font: branch.style.label.font}}
                y={20}
                transform={"rotate(-15)"}
            >
                🎷 {branch.name}
            </text>
        );
    };

    const renderTooltip = (commit) => { //: CommitOptions["renderTooltip"]
        const commitSize = commit.style.dot.size * 2;
        return (
            <g transform={`translate(${commitSize + 10}, ${commitSize / 2})`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 71.84 75.33"
                    height="30"
                    width="30"
                >
                    <g fill={commit.style.dot.color} stroke="white" strokeWidth="2">
                        <path d="M68.91,35.38c4.08-1.15,3.81-3-.22-3.75-3.1-.7-18.24-5.75-20.71-6.74-2.15-1-4.67-.12-1,3.4,4,3.53,1.36,8.13,2.79,13.47C50.6,44.89,52.06,49,56,55.62c2.09,3.48,1.39,6.58-1.42,6.82-1.25.28-3.39-1.33-3.33-3.82h0L44.68,43.79c1.79-1.1,2.68-3,2-4.65s-2.5-2.29-4.46-1.93l-1.92-4.36a3.79,3.79,0,0,0,1.59-4.34c-.62-1.53-2.44-2.27-4.37-2L36,22.91c1.65-1.12,2.46-3,1.83-4.52a3.85,3.85,0,0,0-4.37-1.95c-.76-1.68-2.95-6.89-4.89-10.73C26.45,1.3,20.61-2,16.47,1.36c-5.09,4.24-1.46,9-6.86,12.92l2.05,5.35a18.58,18.58,0,0,0,2.54-2.12c1.93-2.14,3.28-6.46,3.28-6.46s1-4,2.2-.57c1.48,3.15,16.59,47.14,16.59,47.14a1,1,0,0,0,0,.11c.37,1.48,5.13,19,19.78,17.52,4.38-.52,6-1.1,9.14-3.83,3.49-2.71,5.75-6.08,5.91-12.62.12-4.67-6.22-12.62-5.81-17S66.71,36,68.91,35.38Z" />
                        <path d="M2.25,14.53A28.46,28.46,0,0,1,0,17.28s3,4.75,9.58,3a47.72,47.72,0,0,0-1.43-5A10.94,10.94,0,0,1,2.25,14.53Z" />
                    </g>
                </svg>
                <text x={40} y={15} fill={commit.style.dot.color}>
                    {commit.hashAbbrev} - {commit.subject}
                </text>
            </g>
        );
    };

    return (
        <Gitgraph options={{
            template: withoutAuthor
            // generateCommitHash: createFixedHashGenerator()
        }}>
            {(gitgraph) => {
                // Simulate git commands with Gitgraph API.
                const master = gitgraph.branch({name: content.master.branch});
                master.commit({subject: "Initial commit in Millennials era"});
                const edu = gitgraph.branch("Education");
                edu.commit("Personal finance, desktop with 128MB RAM and 1GB HD")
                edu.merge(btech(gitgraph), "Graduated in distinction").tag("2004 - Bachelor Degree");
                edu.merge(uiuc(gitgraph), "Certification").tag("2010 - UIUC, Champaign, IL");
                master.merge(edu, "Most eligible graduate for programming job!");

                const work = gitgraph.branch("Professional experience");
                work.commit("Got drivers license, Bought some business casuals and upgraded to laptop.");
                work.merge(alcatel(gitgraph), "Learnt few french words: Bonjour, c'est mon premier boulot.").tag("2005 - Associate Developer");
                work.merge(amdocs(gitgraph), "Experienced Europe & US culture, enjoyed travelling, ping-pong & food.").tag("2009 - Sr. Subject Matter Expert");
                work.merge(statefarm(gitgraph), "Had fun taking up challenges and build successfull team").tag("2012 - Tech Lead/Architect");
                work.merge(aa(gitgraph), "Work life balance/integration. Volleyball & still love ping-pong").tag("Till date - Lead Analyst")
                    .commit(content.master.commit);
                master.merge(work, content.master.merge);
            }}
        </Gitgraph>
    );
}

function btech(gitgraph) {
    const edu = gitgraph.branch("Computer Science");
    edu.commit("Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc");
    edu.commit("Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)");
    return edu;
}

function uiuc(gitgraph) {
    const edu = gitgraph.branch("System Programming");
    edu.commit("Algorithms, datastructures, OS, Security, Andrioid");
    edu.commit("Andriod kernal api & app for monitoring and optimizing resources");
    return edu;
}

function alcatel(gitgraph) {
    const branch = gitgraph.branch("Alcatel India Ltd");
    branch.commit("Extreme programming in C, C++. Experimental and fun driven development")
        .commit("Built an application layer for CAMEL protocol for SS7 stack on TCP");
    return branch;
}

function amdocs(gitgraph) {
    const branch = gitgraph.branch("Amdocs Inc.");
    branch.commit("Extreme programming, linux kernel, IPC/socket programming, multi threading, shared memory etc")
        .commit("From C, C++ to Java & web technologies, Multi threading, web services, unit testing etc")
        .commit("Front end applications, desktop tools, automate tidious tasks, pl/sql")
        .commit("Shortcuts, custom tools, scripting, Reusable modules/libraries, apis");
    return branch;
}

function statefarm(gitgraph) {
    const branch = gitgraph.branch("Statefarm.");
    branch.commit("FullStack development, experimenting on JS & JQuery, big data, Spring and other java libraries")
        .commit("CI/CD pipeline on jenkins, automating version control and releases")
        .commit("Encourage reusability, clean code, solid principles, design patterns")
        .commit("Leadership qualities, product thinking, Delivery challenges");
    return branch;
}

function aa(gitgraph) {
    const branch = gitgraph.branch("American Airlines.");
    branch.commit("FullStack + devops, cloud technologies, design thinking, Agile principles, Angular vs react")
        .commit("From complex design patterns to simple and SOLID code")
        .commit("Focus on team success than personal. Ownership, mentoring, traning.");
    return branch;
}