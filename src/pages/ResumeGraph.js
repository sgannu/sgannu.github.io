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

    const renderContact = () => {
        return (
            <text>
                <span className="selected">{content.master.branch}</span>
                <a className="gray" href="mailto:sgannu.e@gmail.com">
                    <img src="email.png" alt="icon" style={{width: '15px'}} />
                    <span>sgannu.e@gmail.com</span>
                </a>
                <a className="gray" href="tel:989-383-0030">
                    <img src="phone.png" alt="icon" style={{width: '15px'}} />
                    <span>989.383.0030</span>
                </a>
            </text>
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
                master.merge(work, content.master.commit);
                master.commit(content.master.merge)
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