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

                content.edu.forEach(data => {
                    edu.merge(branch(gitgraph, data), data.merge).tag(data.tag);
                });
                master.merge(edu, "Most eligible graduate for programming job!");

                const work = gitgraph.branch("Professional experience");
                work.commit("Got drivers license, Bought some business casuals and upgraded to laptop.");
                content.work.forEach(workData => {
                    work.merge(branch(gitgraph, workData), workData.merge).tag(workData.tag);
                });
                master.merge(work, content.master.commit + "Father, runner, love teaching, mentoring and recreational sports (biking, volleyball, ping-pong etc)");
                master.commit(content.master.merge)
            }}
        </Gitgraph>
    );
}

function branch(gitgraph, data) {
    const branch = gitgraph.branch(data.branch);
    data.commits.forEach(commit => branch.commit(commit));
    return branch;
}